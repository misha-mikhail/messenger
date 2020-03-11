import { IUser } from '@chat/shared';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../services/user-repository';
import GetUsersQuery from '../endpoint-queries/get-users-query';
import { Context } from 'koa';
import Route from '../types/route';

export const UsersRoutes: Route[] = [
    {
        path: '/users/get',
        method: 'GET',
        action: getUser,
    },
    {
        path: '/users/edit-bio',
        method: 'POST',
        action: editBio,
    },
];


async function getUser(ctx: Context) {
    const repo = getCustomRepository(UserRepository);

    const { username } = ctx.query as GetUsersQuery;

    if (!username) {
        ctx.status = 400;
        ctx.body = {
            Error: [ 'username' ],
        };
        return;
    }

    const user = await repo.findByUsername(username);

    user && ctx.send(user) || ctx.callNotFound();
}

function editBio(ctx: Context) {
    const user: IUser = {
        Username: 'some-username',
        Bio: 'This is the edited bio !',
    };

    ctx.body = user;
}

