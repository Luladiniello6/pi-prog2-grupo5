var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.index);

router.get('/agregar', productController.create)

router.get('/editar/:id', productController.edit)

module.exports = router;
