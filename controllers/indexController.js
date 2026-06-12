const db = require('../database/models');
const { Op } = require('sequelize');

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
    
            let search = req.query.search;
    
            db.Producto.findAll({
                where: {
                    nombre: {
                        [Op.like]: "%" + search + "%"
                    }
                },
                include: [
                    { association: "usuario" },
                    //{ association: "comentarios" }
                ]
            })
                .then(function (results) {
                    return res.render("search-results", {
                        results: results,
                        search: search
                    });
                })
                .catch(function (error) {
                    return res.send(error);
                })
        }
};

module.exports = indexController; 