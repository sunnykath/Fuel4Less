/**
 * A RESTful API for dealing with users.
 */

 import express from 'express';

 
 // Import the DAO from app-data
  import {
     createUser,
     retrieveUser,
     retrieveUserList,
     retrieveUserByUserName,
     updateUser,
     deleteUser
 } from '../../app-data/users-dao';
 

 // const HTTP_OK = 200; // Not needed as this is the default
 const HTTP_CREATED = 201;
 const HTTP_NOT_FOUND = 404;
 const HTTP_NO_CONTENT = 204;
 
 const router = express.Router();


// Create new User -- Sign up
router.post('/', async (req, res) => {
    const newUser = await createUser({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        // displayPicture: req.body.displayPicture,
        // canUpdatePrice: req.body.canUpdatePrice,
        // petrolStation: req.body.petrolStation
    });

    res.status(HTTP_CREATED)
        .header('Location', `/api/users/${newUser._id}`)
        .json(newUser);
})

// Retrieve all users
router.get('/', async (req, res) => {
    
    res.json(await retrieveUserList(req.query));

});

// Retrieve single user
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const user = await retrieveUser(id);

    if (user) {
        res.json(user);
    }
    else {
        res.sendStatus(HTTP_NOT_FOUND);
    }
});


// Update user
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const user = req.body;
    user._id = id;
    const success = await updateUser(user);
    res.sendStatus(success ? HTTP_NO_CONTENT : HTTP_NOT_FOUND);
});

// Delete user
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await deleteUser(id);
    res.sendStatus(HTTP_NO_CONTENT);
});

export default router;
