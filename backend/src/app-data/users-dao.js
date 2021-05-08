import { users } from './user-schema';

async function createUser(user) {
    
    const dbUser = new users(user);
    await dbUser.save();
    return dbUser;
}

async function retrieveUserList() {
    return await users.find();
}

async function retrieveUser(id) {
    return await users.findById(id);
}

async function updateUser(user) {
    
    const dbUser = await users.findById(user._id);
    if (dbUser) {
        dbUser.name = users.name;
        dbUser.email = users.email;
        dbUser.username = users.username;
        dbUser.password = users.password;
        dbUser.displayPicture = users.displayPicture;

        await dbUser.save();
        return true;
    }
    return false;
}

async function deleteUser(id) {
    await users.deleteOne({_id: id});
}

export {
    createUser,
    retrieveUser,
    retrieveUserList,
    updateUser,
    deleteUser
}
