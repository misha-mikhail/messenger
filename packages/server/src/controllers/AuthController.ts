import { JsonController, Post, Body, BadRequestError, HttpCode } from 'routing-controllers';
import { UserCredentials } from '../endpoint-queries/UserCredentials';
import { UserRepository } from '../database/repositories/UserRepository';
import { getJwtSecret } from '../auth';

@JsonController('/auth')
export class AuthController {
    // TODO: Inject UserRepository here (Issue #9).

    @Post('/login')
    async login(@Body() loginRequest: UserCredentials) {
        const userRepo = new UserRepository(await getJwtSecret())

        const user = await userRepo.findUserByUsername(loginRequest.Username);

        if (!user || !user.verifyPassword(loginRequest.Password)) {
            throw new BadRequestError('Wrong username or password');
        }

        const token = userRepo.createJwt(user);

        return { Username: user.Username, Token: token };
    }

    @Post('/register')
    @HttpCode(201)
    async register(@Body() registerRequest: UserCredentials) {
        const userRepo = new UserRepository(await getJwtSecret())

        if (await userRepo.findUserByUsername(registerRequest.Username)) {
            throw new BadRequestError('User with such name already exists.');
        }

        try {
            const newUser = await userRepo.create(
                                    registerRequest.Username,
                                    registerRequest.Password
                                );

            const token = userRepo.createJwt(newUser);

            return { Username: registerRequest.Username, Token: token };
        }
        catch (err) {
            throw new BadRequestError(err);
        }
    }
}
