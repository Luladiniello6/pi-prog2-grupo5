const producto = require('../localdata/data');
const listaProductos = producto.productos; 

const controller = {
    index: function (req, res) {
        res.render('index', {listaProductos })
    },

    create: function(req, res){
        res.render('product-add')
    },

    edit: function(req, res){

        res.render('product-edit')
    },

    search: function(req, res){
        res.render('search-results')
    }
}

module.exports = controller;