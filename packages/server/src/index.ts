import meaningOfLife from '@chat/shared';
import * as fastify from 'fastify';

console.log({ meaningOfLife });

const server = fastify({ logger: true });

server.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})

server.listen(3000, function (err, address) {
    if (err) {
        server.log.error(err)
        process.exit(1)
    }
    server.log.info(`server listening on ${address}`)
})
