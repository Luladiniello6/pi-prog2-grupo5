const producto = require('../localdata/data');
const listaProductos = producto.productos; 

const productController = {
    producto: function (req, res) {
        let producto = data.productos[req.params.id];
        res.render('product', {listaProductos: producto })
    },

    agregarProducto: function(req, res){
        res.render('product-add', {listaProductos: producto.usuario} )
    },

    editarProducto: function(req, res){
        res.render('product-edit')
    },
}

module.exports = productController;