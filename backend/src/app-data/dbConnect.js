import mongoose from 'mongoose';

const DEFAULT_CONNECTION_STRING = 'mongodb+srv://f4l:f4l@f4l.7zdbe.mongodb.net/F4L';

export default function connectToDatabase(connectionString = DEFAULT_CONNECTION_STRING) {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true
    });
}