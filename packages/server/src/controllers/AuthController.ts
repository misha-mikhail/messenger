import { JsonController, Post, Body, BadRequestError, HttpCode } from 'routing-controllers';
import { UserCredentials } from '../endpoint-queries/UserCredentials';
import { UserRepository } from '../database/repositories/UserRepository';

@JsonController('/auth')
export class AuthController {
    constructor(private readonly userRepo: UserRepository) {
    }

    @Post('/login')
    async login(@Body() loginRequest: UserCredentials) {
        const user = await this.userRepo.findUserByUsername(loginRequest.Username);
        if (!user || !user.verifyPassword(loginRequest.Password)) {
            throw new BadRequestError('Wrong username or password');
        }

        const token = this.userRepo.createJwt(user);
        return { Username: user.Username, Token: token };
    }

    @Post('/register')
    @HttpCode(201)
    async register(@Body() registerRequest: UserCredentials) {
        if (await this.userRepo.findUserByUsername(registerRequest.Username)) {
            throw new BadRequestError('User with such name already exists.');
        }
        try {
            const newUser = await this.userRepo.create(
                                    registerRequest.Username,
                                    registerRequest.Password
                                );

            const token = this.userRepo.createJwt(newUser);

            return { Username: registerRequest.Username, Token: token };
        }
        catch (err) {
            throw new BadRequestError(err);
        }
    }
}
