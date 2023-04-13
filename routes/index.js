const { Router } = require('express');
const phonesRouter = require('./phonesRouter');
const usersRouter = require('./usersRouter');

const router = Router();

// /api/users
router.use('/users', usersRouter);

// /api/phones
router.use('/phones', phonesRouter);

module.exports = router;
