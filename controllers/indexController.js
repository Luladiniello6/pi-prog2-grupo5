const index = require('../routes/index')
const producto = require('../localdata/data');
const listaProductos = producto.productos; 
const listaComentarios = producto.comentarios

const controller = {
    index: function (req, res) {
        res.render('index', {listaProductos: listaProductos, listaComentarios: listaComentarios} )
    }}

module.exports = controller; 