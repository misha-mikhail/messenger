import server from '../server';

server.get('/messages/get', function(request, reply) {
    const message = {
        Text: 'Lolka'
    };

    reply.send(message);
});

server.post('/messages/send', function(request, reply) {
    // const repo = getCustomRepository(MessageRepository);

    // repo.sendMessage
    reply.send();
})