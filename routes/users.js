const exprees = require('express');
const router = exprees.Router();
const { getUsers, getUser } = require('../controllers/users');

//TODO http://localhost/users GET, POST, PUT, DELETE

router.get('/', getUsers);

router.get('/:id ', getUser);



module.exports = router;