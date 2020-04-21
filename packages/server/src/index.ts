import 'reflect-metadata';

import { connectToDatabase } from './database/connection';
import { startApplication } from './server';

(async () => {
    await connectToDatabase();
    const app = await startApplication(3001);
})();
