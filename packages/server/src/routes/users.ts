import { IUser } from '@chat/shared';
import GetUsersQuery from '../endpoint-queries/get-users-query';
import { Context } from 'koa';
import { Route, HttpMethod } from '../types/route';

export const UsersRoutes: Route[] = [
    {
        path: '/users/get',
        method: HttpMethod.GET,
        action: getUser,
    },
    {
        path: '/users/edit-bio',
        method: HttpMethod.POST,
        action: editBio,
    },
];


async function getUser(ctx: Context) {

    const { username } = ctx.query as GetUsersQuery;

    // TODO: request query/body validation
    if (!username) {
        ctx.status = 400;
        ctx.body = {
            Error: [ 'username' ],
        };
        return;
    }

    // const user = await repo.findByUsername(username);
    const user = {};

    ctx.status = user ? 200 : 404;
    ctx.body = user || { Error: 'Not found!' };
}

function editBio(ctx: Context) {
    const user: IUser = {
        Username: 'some-username',
        Bio: 'This is the edited bio !',
    };

    ctx.body = user;
}

