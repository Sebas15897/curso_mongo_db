const exprees = require('express');
const router = exprees.Router();
const { getUsers, getUser, createUser } = require('../controllers/users');

//TODO http://localhost/users GET, POST, PUT, DELETE

router.get('/', getUsers);

router.get('/:id ', getUser);

router.post('/', createUser);



module.exports = router;