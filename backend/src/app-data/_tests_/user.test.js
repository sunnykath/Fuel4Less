import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { users } from '../petrol-stations-schema';

let mongod;
let user1, user2, user3;

beforeAll(async () => {
    mongod = new MongoMemoryServer();
    
    const connectionString = await mongod.getUri();
    await mongoose.connect(connectionString, { useNewUrlParser: true });
});

beforeEach(async () => {
    const coll = await mongoose.connection.db.createCollection('users');
    user1 = {
        name: 'name1',
        email: "email1",
        username: 'username1',
        password: 'password1'
    };
    user2 = {
        name: 'name2',
        email: "email2",
        username: 'username2',
        password: 'password2'
    };

    user3 = {
        name: 'name3',
        email: "email3",
        username: 'username3',
        password: 'password3'
    };

    await coll.insertMany([user1, user2, user3]);
});

/**
 * After each test, clear the database entirely
 */
 afterEach(async () => {
    await mongoose.connection.db.dropCollection('users');
});


afterAll(async () => {
    await mongoose.disconnect();
    await mongod.stop();
});

it('gets all users', async () => {
   
    const user = await users.find();
    expect(user).toBeTruthy();

    expect(user.length).toBe(3);

    expect(user[0].name).toBe('name1');
    expect(user[0].username).toBe('username1');
    expect(user[0].email).toBe('email1');
    expect(user[0].password).toBe('password1');

    expect(user[1].name).toBe('name2');
    expect(user[1].username).toBe('username2');
    expect(user[1].email).toBe('email2');
    expect(user[1].password).toBe('password2');

    expect(user[2].name).toBe('name3');
    expect(user[2].username).toBe('username3');
    expect(user[2].email).toBe('email3');
    expect(user[2].password).toBe('password3');

});

it('gets a single user', async () => {

    const user = await users.findById(user._id);

    expect(user[1].name).toBe('name2');
    expect(user[1].username).toBe('username2');
    expect(user[1].email).toBe('email2');
    expect(user[1].password).toBe('password2');
});

it('adds a user without crashing', async () => {
    const user = new users({
        name: 'name4',
        username:'username4',
        email: 'email4',
        password:'password4'
    });

    await user.save();

    const fromDB =  await mongoose.connection.db.collection('users').findOne({ _id: user._id });
    expect(fromDB).toBeTruthy();
    expect(fromDB.name).toBe('name4');
    expect(fromDB.username).toBe('username4');
    expect(fromDB.email).toBe('email4');
});


