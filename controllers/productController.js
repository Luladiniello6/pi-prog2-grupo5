const producto = require('../db/data');
const listaProductos = producto.productos; 

const controller = {
    index: function (req, res) {
        res.render('product', {listaProductos })
    },

    create: function(req, res){
        res.render('product-add')
    },

    edit: function(req, res){

        res.render('product-edit')
    }
}

module.exports = controller;