import server from '../server';
// import { Contact } from '@chat/shared';

server.get('/contacts/get', function(request, reply) {
    const contact = {
        Friend: 228,
    };

    reply.send(contact);
});

server.post('/contacts/add', function(request, reply) {
    const contact = {
        Friend: 1337,
    };

    reply.send(contact);
});