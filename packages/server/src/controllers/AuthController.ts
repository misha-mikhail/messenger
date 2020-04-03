import { JsonController, Post, Body, BadRequestError, HttpCode, Ctx } from 'routing-controllers';
import { Context } from 'koa';
import * as jwt from 'jsonwebtoken';
import * as passport from 'koa-passport';
import { jwtSecret } from '../passport/jwt';
import { User } from '../database/entities';
import { UserModel } from '../database/entities/User';

@JsonController('/auth')
export class AuthController {

    @Post('/login')
    async login(@Ctx() ctx: Context) {
        // await passport.authenticate('local', (err, user: User | null) => {
        //     console.log({err, user});

        //     if (user as any === false) {
        //         ctx.status = 401;
        //         ctx.body = 'Login failed';
        //     } else {
        //         const payload = {
        //             Id: (user as any)._id,
        //             Username: user.Username,
        //         };

        //         const token = jwt.sign(payload, jwtSecret); // JWT is created here

        //         console.log({token});

        //         ctx.body = { Username: user.Username, token };
        //     }
        // })(ctx, next);
    }

    @Post('/register')
    @HttpCode(201)
    async register(@Body() requestBody: any) {
        try {
            const { username, password } = requestBody;
            const newUser = await UserModel.create(new User(username, password));

            return { Username: newUser.Username };
        }
        catch (err) {
            throw new BadRequestError(err);
        }
    }
}
