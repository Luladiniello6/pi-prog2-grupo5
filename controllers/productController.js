const producto = require('../localdata/data');
const listaProductos = producto.productos; 
const listaComentarios = producto.comentarios

const controller = {
    index: function (req, res) {
        res.render('index', {listaProductos: listaProductos, 
                            listaComentarios : listaComentarios})
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