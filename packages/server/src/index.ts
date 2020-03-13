import server from './server';
import initializeDatabaseConnection from './database/connection';
import { getConnection } from 'typeorm';

import "reflect-metadata";

require('./plugins/users');
require('./plugins/messages');
require('./plugins/contacts');
require('./plugins/auth');
require('./plugins/test');

(async () => {
    await initializeDatabaseConnection();

    const conn = getConnection();
    console.log({conn});

    server.listen(3000, function (err, address) {
        if (err) {
            server.log.error(err)
            process.exit(1)
        }
    });
})();
