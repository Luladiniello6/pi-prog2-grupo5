var express = require('express');
var router = express.Router();
const { body } = require('express-validator');
const db = require('../database/models')
var userController = require('../controllers/userController')

let validacionesRegister = [
  body('username')
    .notEmpty().withMessage('debes completar el nombre').bail(),
  body('email')
    .notEmpty().withMessage('El email no puede estar vacío').bail()
    .isEmail().withMessage('El email no es válido')
    .custom(function (value) {
      return db.User.findOne({
        where: { email: value }
      })
        .then(function (usuario) {
          if (usuario) {
            return Promise.reject('el email ya esta registrado');
          }
        });
    }),
  body('password')
    .notEmpty().withMessage('debes completar la contraseña').bail()
    .isLength({ min: 3 }).withMessage('la contraseña debe tener al menos 3 caracteres')
];

let validacionesLogin = [
  body('email')
    .notEmpty().withMessage('El email no puede estar vacío').bail()
    .isEmail().withMessage('El email no es válido'),
  body('contrasena')
      .notEmpty().withMessage('debes completar la contraseña').bail()
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
/* ruta por GET que envia el formulario de creacion */
router.get('/login', userController.login);
router.post('/login',validacionesLogin, userController.loginprocess)

router.get('/register', userController.register);
/* ruta por POST que procesa la informacion del formulario */
router.post('/register', validacionesRegister, userController.registerprocess);

router.get('/profile/:id', userController.profile);
//router.post('/profile', userController.profileprocess)

router.post('/logout', userController.logout);
//router.post('/logout', userController.logoutprocess)

module.exports = router;
