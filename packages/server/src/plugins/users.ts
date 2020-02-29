import server from '../server';
import { User } from '@chat/shared';


server.get('/users/get', function (request, reply) {
    const user: User = {
        Username: 'someUserName',
    };
    
    reply.send(user);
});

server.patch('/users/edit-bio', function (request, reply) {
    const user: User = {
        Bio: 'This is the edited bio !',
    };
    
    reply.send(user);
});

    