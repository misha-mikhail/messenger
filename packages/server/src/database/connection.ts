import {createConnection} from 'typeorm';

export default async function() {
    return await createConnection({
        type: "mongodb",
        host: "localhost",
        port: 27017,
        database: "chat"
    });
}