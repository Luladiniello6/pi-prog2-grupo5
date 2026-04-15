var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

router.get('/id/:id', productController.index);

router.get('/agregar', productController.create)

router.get('/editar/:id', productController.edit)

router.get('/search', productController.search)

module.exports = router;
