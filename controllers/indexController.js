const db = require('../database/models');

const indexController = {
    index: function (req, res) {
    db.Producto.findAll()
        .then(function(productos) {
            return res.render('index', { listaProductos: productos });
        })
        .catch(function(error) {
            return res.send(error);
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