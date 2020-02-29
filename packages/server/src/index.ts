import server from './server';

require('./plugins/users');

server.listen(3000, function (err, address) {
    if (err) {
        server.log.error(err)
        process.exit(1)
    }
})
