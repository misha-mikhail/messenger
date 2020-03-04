import server from '../server'
//import authService

server.post('/auth/login', function(request, reply) {
    const token = {
        Value: '65as56fs4a65g4a65g4da65g4',
    };

    reply.send(token);
});

server.post('/auth/register', function(request, reply) {
    const token = {
        Value: '5456as6afaf4afas4f98',
    };

    reply.send(token);
});