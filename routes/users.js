var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/profile', userController.profile);
router.get('/logout', userController.logout);

module.exports = router;
