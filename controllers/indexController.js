const index = require('../routes/index')
const producto = require('../localdata/data');
const listaProductos = producto.productos; 
const listaComentarios = producto.comentarios

const indexController = {
    index: function (req, res) {
        res.render('index', {listaProductos: listaProductos });
    },
    resultados: function (req, res) {
        res.render('search-results', {productos: listaProductos});
    }
};

module.exports = indexController; 