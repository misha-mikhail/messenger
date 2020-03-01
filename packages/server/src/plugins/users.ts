import server from '../server';
import { User } from '@chat/shared';

server.get('/users/get', function (request, reply) {
    const user = {
        Username: 'someUserName',
    };

    reply.send(user);
});
