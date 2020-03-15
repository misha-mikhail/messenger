import * as mongoose from 'mongoose';

export async function connectToDatabase() {
    return await mongoose.connect('mongodb://localhost:27017/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'chat',
    });
}