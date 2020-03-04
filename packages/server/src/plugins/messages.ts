import server from '../server';
//import { Message } from '@chat/shared';

server.get('/messages/get', function(request, reply){
    const message = {
        Text: 'Lolka'
    };

    reply.send(message);
});

server.post('/messages/send', function(request, reply){
    const message = {
        Text: 'message sent'
    };

    reply.send(message);
})