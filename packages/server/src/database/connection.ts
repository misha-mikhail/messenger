import {createConnection} from 'typeorm';
import { User } from '@chat/shared';

export default async function() {
    return await createConnection({
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        database: 'chat',
        entities: [
            User,
        ]
    });
}