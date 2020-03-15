import server from '../server';
import { IUser } from '@chat/shared';
// import { getCustomRepository } from 'typeorm';
// import UserRepository from '../services/user-repository';
import GetUsersQuery from '../endpoint-queries/get-users-query';

server.get<GetUsersQuery>('/users/get', async function (request, reply) {
    // const repo = getCustomRepository(UserRepository);

    const { username } = request.query;

    if (!username) {
        reply.code(400).send({
            Error: [ 'username' ],
        });
        return;
    }

    // const user = await repo.findByUsername(username);
    const user = {};

    user && reply.send(user) || reply.callNotFound();
});

server.patch('/users/edit-bio', function (request, reply) {
    const user: IUser = {
        Username: 'some-username',
        Bio: 'This is the edited bio !',
    };

    reply.send(user);
});

