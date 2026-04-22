const data = require('../localdata/data');
const listaProductos = data.productos;
const listaComentarios = data.comentarios
const usuario = data.usuario;

const productController = {
    producto: function (req, res) {
        let idProducto = req.params.id;
        let producto;

        for (let i = 0; i < listaProductos.length; i++)
            if (listaProductos[i].id == idProducto) {
                producto = listaProductos[i]

            }

        res.render('product',
            {
                producto: producto,
                usuario: usuario
            })
    },

    agregarProducto: function (req, res) {
        res.render('product-add', { usuario: usuario })
    },

    editarProducto: function (req, res) {
        res.render('product-edit', { usuario: usuario })
    },
}

module.exports = productController;