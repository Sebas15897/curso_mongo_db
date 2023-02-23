const exprees = require('express');

const router = exprees.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updatedUser,
  deleteUser,
} = require('../controllers/users');

//TODO http://localhost/users GET, POST, PUT, DELETE

router.get('/', getUsers);

router.get('/:id ', getUserById);

router.post('/', createUser);

router.put('/:id', updatedUser);

router.delete('/:id', deleteUser);

module.exports = router;
