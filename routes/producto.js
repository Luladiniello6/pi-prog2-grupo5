var express = require('express');
var router = express.Router();
const { body } = require('express-validator');

const productController = require('../controllers/productController');


router.get('/detalle/:id', productController.producto);
router.get('/agregarproducto',
    body('foto')
        .notEmpty()
        .withMessage('Debe ingresar el nombre de la imagen'),

    body('nombre')
        .notEmpty()
        .withMessage('Debe ingresar el nombre de la imagen'),

    body('descripcion')
        .notEmpty()
        .withMessage('Debe  ingresar una descripcion'),

    productController.agregarProducto);

router.get('/editarproducto', productController.editarProducto);

router.get('/search-results', productController.search)

module.exports = router;
