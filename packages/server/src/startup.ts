import initializeDatabaseConnection from './database/connection';

export default async function startup() {
    await initializeDatabaseConnection();

}