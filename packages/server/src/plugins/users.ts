import server from '../server';
import { User } from '@chat/shared';
import { getConnection } from 'typeorm';

server.get('/users/get', async function (request, reply) {
    const repo = getConnection().getRepository(User);

    const allUsers = await repo.find();

    reply.send(allUsers);
});

server.get('/users/make-test-single', async function (request, reply) {
    const repo = getConnection().getRepository(User);

    const user = new User();
    Object.assign(user, {
        Bio: 'safasf',
        Username: 'asfas',
    })
    await repo.save(user);

    reply.send({user});
});
