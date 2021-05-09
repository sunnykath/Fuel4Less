import connectToDatabase from '../../../app-data/dbConnect';
import mongoose from 'mongoose';
import router from '../petrol-stations';
import { MongoMemoryServer } from 'mongodb-memory-server';
import express from 'express';
import axios from 'axios';
import { users } from '../../../app-data/petrol-stations-schema';

let mongod, app, server;
let petrolStation1, petrolStation2, petrolStation3;

beforeAll(async done => {

    mongod = new MongoMemoryServer();

    await mongod.getUri().then((cs) => connectToDatabase(cs));

    app = express();
    app.use(express.json());
    app.use("/", router);
    server = app.listen(3000, () => done());

});