import { Context } from 'koa';
import { Route, HttpMethod } from '../types/route';
// import authService

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

function login(context: Context) {
    const token = {
        Value: '65as56fs4a65g4a65g4da65g4',
    };

    context.body = token;
}

function register(context: Context) {
    const token = {
        Value: '5456as6afaf4afas4f98',
    };

    context.body = token;
}