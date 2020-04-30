import * as mongoose from 'mongoose';
import { readAppSettings } from '../app-settings';

export async function connectToDatabase() {
    const connectionSettings = (await readAppSettings())?.DatabaseConnection;

    return await mongoose.connect(connectionSettings.MongoUrl, {
        dbName: connectionSettings.DatabaseName,

        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}
