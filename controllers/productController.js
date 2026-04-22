const data = require('../localdata/data');
const listaProductos = data.productos; 
const listaComentarios = data.comentarios

const productController = {
    producto: function (req, res) {
        let idProducto = req.params.id;
        let producto;

        for(let i=0; i < listaProductos.length; i++)
            if(listaProductos[i].id == idProducto){
                producto =listaProductos[i]

            }

        res.render('product', {producto: producto })
    },

    agregarProducto: function(req, res){
        res.render('product-add', {listaProductos: data.usuario} )
    },

    editarProducto: function(req, res){
        res.render('product-edit')
    },
}

module.exports = productController;