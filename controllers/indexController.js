const index = require('../routes/index')
const data = require('../localdata/data');
const listaProductos = data.productos; 
const listaComentarios = data.comentarios

const indexController = {
    index: function (req, res) {
        res.render('index', {listaProductos: listaProductos });
    },
    resultados: function (req, res) {
        res.render('search-results', {productos: listaProductos});
    }
};

module.exports = indexController; 