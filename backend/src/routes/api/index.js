import express from 'express';

const router = express.Router();

// TODO: Implement Routing

import users from './users';
router.use('/users', users);

import petrolStation from './petrol-stations';
router.use('/stations', petrolStation);

export default router;