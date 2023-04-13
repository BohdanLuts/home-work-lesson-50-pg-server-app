const { Router } = require('express');
const { usersController } = require('../controllers');
const { paginate, validate } = require('../middleware');

// /api/users
const usersRouter = Router();

usersRouter
  .route('/')
  .post(validate.validateUserOnCreate, usersController.createUser)
  .get(paginate.paginateUser, usersController.getUsers);

// /api/users/1
usersRouter
  .route('/:userId')
  .patch(validate.validateUserOnUpdate, usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = usersRouter;

//-------------------------------------------
// onclick <-> HTTPMethod+route
// const listener = () => {};
// button.addEventListener('click',listener)
// button.addEventListener('click',listener1)
// button.addEventListener('click',listener2)
