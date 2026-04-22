const index = require('../routes/index')
const data = require('../localdata/data');
const listaProductos = data.productos;
const usuario = data.usuario;

const indexController = {
    index: function (req, res) {
        res.render('index', {
            listaProductos: listaProductos,
            usuario: usuario
        });
    },
    resultados: function (req, res) {
        res.render('search-results', {
            productos: listaProductos,
            usuario: usuario
        });
    }
};

module.exports = indexController; 