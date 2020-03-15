import { Context } from 'koa';
import { Route, HttpMethod } from '../types/route';
import { UserModel, User } from '../database/entities/User';
import * as jwt from 'jsonwebtoken';
import * as passport from 'koa-passport';
import { jwtSecret } from '../passport/jwt';

export const AuthRoutes: Route[] = [
    {
        path: '/auth/login',
        method: HttpMethod.POST,
        action: login,
    },
    {
        path: '/auth/register',
        method: HttpMethod.POST,
        action: register,
    },
];

async function login(ctx: Context, next: Function) {
    await passport.authenticate('local', (err, user: User | null) => {
        console.log({err, user});

        if (user as any === false) {
            ctx.status = 401;
            ctx.body = 'Login failed';
        } else {
            const payload = {
                Id: (user as any)._id,
                Username: user.Username,
            };

            const token = jwt.sign(payload, jwtSecret); // JWT is created here

            console.log({token});

            ctx.body = { Username: user.Username, token };
        }
    })(ctx, next);
}

async function register(ctx: Context) {
    // TODO: Проверить, существует ли юзер с таким юзернеймом.

    try {
        const { username, password } = ctx.request.body;
        const newUser = await UserModel.create(new User(username, password));

        ctx.status = 201;
        ctx.body = { Username: newUser.Username };
    }
    catch (err) {
        ctx.status = 400;
        ctx.body = err;
    }
}
