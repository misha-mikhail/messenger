import { IUser } from '@chat/shared';
import GetUsersQuery from '../endpoint-queries/get-users-query';
import { Context } from 'koa';
import { Route, HttpMethod } from '../types/route';

export const UsersRoutes: Route[] = [
    {
        path: '/users/get',
        method: HttpMethod.GET,
        action: getUser,
        model: GetUsersQuery,
    },
    {
        path: '/users/edit-bio',
        method: HttpMethod.POST,
        action: editBio,
    },
];


async function getUser(ctx: Context) {
    const { username } = ctx.query;

    // TODO: find user by name
    const user = { username };

    ctx.status = user ? 200 : 404;
    ctx.body = user || { Error: 'Not found!' };
}

function editBio(ctx: Context) {
    const user: IUser = {
        Conversations: [],
        Username: 'some-username',
        Bio: 'This is the edited bio !',
    };

    ctx.body = user;
}

