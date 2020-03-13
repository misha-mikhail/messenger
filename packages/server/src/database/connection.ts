import { createConnection } from 'typeorm';
import {
    User,
    Conversation,
    Message,
 } from '@chat/shared';

export default async function initializeDatabaseConnection() {
    return await createConnection({
        type: 'mongodb',
        host: 'localhost',
        port: 27017,
        database: 'chat',
        entities: [
            User,
            Conversation,
            Message,
        ]
    });
}