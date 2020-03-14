import "reflect-metadata";

import server from './server';
import { connectToDatabase } from './database/connection';

require('./plugins/users');
require('./plugins/messages');
require('./plugins/contacts');
require('./plugins/auth');
require('./plugins/test');

(async () => {
    const conn = await connectToDatabase();

    console.log({conn});

    server.listen(3000, function (err, address) {
        if (err) {
            server.log.error(err)
            process.exit(1)
        }
    });
})();
