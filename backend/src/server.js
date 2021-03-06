import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

// Setup Express
const app = express();
const port = process.env.PORT || 3001;
// ADD THIS
var cors = require('cors');
app.use(cors());

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Setup body-parser
app.use(express.json());


// Setup our routes.
import routes from './routes';
import connectToDatabase from './app-data/dbConnect';

app.use('/', routes);

// Make the "public" folder available statically
app.use(express.static(path.join(__dirname, '../public')));

// Serve up the frontend's "build" directory, if we're running in production mode.
if (process.env.NODE_ENV === 'production') {
    console.log('Running in production!');

    // Make all files in that folder public
    app.use(express.static(path.join(__dirname, '../../frontend/build')));

    // If we get any GET request we can't process using one of the server routes, serve up index.html by default.
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../frontend/build/index.html'));
    });
}

connectToDatabase()
    .then(() => app.listen(port, () => console.log(`App server listening on port ${port}!`)));

// Start the DB running. Then, once it's connected, start the server.
// mongoose.connect('mongodb://localhost:27017/f4l', { useNewUrlParser: true })
//     .then(() => app.listen(port, () => console.log(`App server listening on port ${port}!`)));
