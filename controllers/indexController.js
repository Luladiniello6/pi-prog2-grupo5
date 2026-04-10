const index = require('../routes/index')
const producto = require('../localdata/data');
const listaProductos = producto.productos; 

const controller = {
    index: function (req, res) {
        res.render('index', {listaProductos })
    }}

module.exports = controller; 