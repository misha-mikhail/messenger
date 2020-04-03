import { JsonController, Post, Body, BadRequestError, HttpCode, Ctx } from 'routing-controllers';
import * as jwt from 'jsonwebtoken';
import { getJwtSecret } from '../auth/';
import { User } from '../database/entities';
import { UserModel } from '../database/entities/User';
import { IsNotEmpty } from 'class-validator';

// TODO: вынести в отдельный файл в ~/endpoint-queries/
class UsernamePasswordRequest {
    @IsNotEmpty()
    Username: string;

    @IsNotEmpty()
    Password: string;
}

interface JwtPayload {
    Id: string;
    Username: string;
}

// TODO: перенести в UserService.createJwt(...).
function createJwt(user: User & { _id: string }) {
    const payload: JwtPayload = {
        Id: user._id.toString(),
        Username: user.Username,
    };

    const jwtSecret = getJwtSecret();

    const token = jwt.sign(payload, jwtSecret);

    return token;
}

@JsonController('/auth')
export class AuthController {

    @Post('/login')
    async login(@Body() loginRequest: UsernamePasswordRequest) {
        const user = await UserModel.findOne({ Username: loginRequest.Username });

        if (!user || !user.verifyPassword(loginRequest.Password)) {
            throw new BadRequestError('Wrong username or password');
        }

        const token = createJwt(user);

        console.log({token});

        return { Username: user.Username, Token: token };
    }

    @Post('/register')
    @HttpCode(201)
    async register(@Body() registerRequest: UsernamePasswordRequest) {
        try {
            const { Username, Password } = registerRequest;

            // TODO:
            // User with such name already exists.

            const newUser = await UserModel.create(new User(Username, Password));

            console.log({newUser});

            const token = createJwt(newUser);

            return { Username, Token: token };
        }
        catch (err) {
            throw new BadRequestError(err);
        }
    }
}
