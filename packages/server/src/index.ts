import server from './server';
import startup from './startup';
import { getConnection } from 'typeorm';

require('./plugins/users');
require('./plugins/messages');
require('./plugins/contacts');
require('./plugins/auth');

(async () => {
    await startup();

    const conn = getConnection();
    console.log({conn});

    server.listen(3000, function (err, address) {
        if (err) {
            server.log.error(err)
            process.exit(1)
        }
    });
})();
