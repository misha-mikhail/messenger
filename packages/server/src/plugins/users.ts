import server from '../server';
import { IUser, User } from '@chat/shared';
import { getConnection } from 'typeorm';

server.get('/users/get', async function (request, reply) {
    const repo = getConnection().getRepository(User);

    const allUsers = await repo.find();

    reply.send(allUsers);
});

server.patch('/users/edit-bio', function (request, reply) {
    const user: IUser = {
        Username: 'some-username',
        Bio: 'This is the edited bio !',
    };

    reply.send(user);
});

