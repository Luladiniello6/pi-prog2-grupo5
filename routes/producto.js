var express = require('express');
var router = express.Router();
const { body } = require('express-validator');

const productController = require('../controllers/productController');


router.get('/detalle/:id', productController.producto);
router.get('/agregarproducto', productController.agregarProducto)
router.post('/agregarproducto',
    body('foto')
        .notEmpty()
        .withMessage('Debe ingresar el nombre de la imagen'),

    body('nombre')
        .notEmpty()
        .withMessage('Debe ingresar el nombre de la imagen'),

    body('descripcion')
        .notEmpty()
        .withMessage('Debe  ingresar una descripcion'),

    productController.guardarProducto);

router.get(
    '/editarproducto/:id', 
    
    body('foto')
    .notEmpty()
    .withMessage('Debe ingresar una imagen'),

    body('nombre')
    .notEmpty()
    .withMessage('Debe ingresar un nombre'),

    body('descripcion')
    .notEmpty()
    .withMessage('Debe ingresar una descripción'),

    productController.editarProducto);

router.post('/editarproducto/:id', productController.actualizarProducto);

router.get('/search-results', productController.search);

router.post(
    '/eliminarproducto/:id',
    productController.eliminarProducto
);
router.post(
    '/comentario/:id',
    productController.guardarComentario
);

module.exports = router;
