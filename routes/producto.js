var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');


router.get('/detalle/:id', productController.producto);
router.get('/agregarproducto', productController.agregarProducto);
router.get('/editarproducto', productController.editarProducto)

module.exports = router;
