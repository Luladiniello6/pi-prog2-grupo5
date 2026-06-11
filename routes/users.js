var express = require('express');
var router = express.Router();
const { body } = require('express-validator');

var userController = require('../controllers/userController')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
/* ruta por GET que envia el formulario de creacion */
router.get('/login', userController.login);
router.post('/login', userController.loginprocess)

router.get('/register', userController.register);
/* ruta por POST que procesa la informacion del formulario */
router.post('/register', userController.registerprocess);

router.get('/profile', userController.profile);
router.post('/profile', userController.profileprocess)

router.get('/logout', userController.logout);
router.post('/logout', userController.logoutprocess)

module.exports = router;
