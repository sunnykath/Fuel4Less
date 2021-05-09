import mongoose from 'mongoose';

const DEFAULT_CONNECTION_STRING = 'mongodb://localhost:27017/f4l';

export default function connectToDatabase(connectionString = DEFAULT_CONNECTION_STRING) {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true
    });
}