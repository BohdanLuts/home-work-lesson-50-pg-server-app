const { Router } = require('express');
const { phonesController } = require('../controllers');
const { paginate } = require('../middleware');

// /api/phones
const phonesRouter = Router();

phonesRouter.get('/', (req, res) => res.send('OK'));

// /api/phones/1
phonesRouter
  .route('/:phonesId')
  .get(paginate.paginatePhone, phonesController.getPhones);

module.exports = phonesRouter;
