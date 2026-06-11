const data = require('../localdata/data');
const listaProductos = data.productos;
const listaComentarios = data.comentarios
const usuario = data.usuario;

const db = require('../database/models');
const { Op } = require('sequelize');

const productController = {

    producto: function (req, res) {
        let idProducto = req.params.id;
        let producto;

        for (let i = 0; i < listaProductos.length; i++)
            if (listaProductos[i].id == idProducto) {
                producto = listaProductos[i]

            }

        res.render('product', {
            producto: producto,
            usuario: usuario
        })
    },

    agregarProducto: function (req, res) {
        res.render('product-add', {
            usuario: usuario
        })
    },

    editarProducto: function (req, res) {
        res.render('product-edit', {
            usuario: usuario
        })
    },

    search: function (req, res) {

        let search = req.query.search;

        db.Producto.findAll({
            where: {
                nombre: {
                    [Op.like]: "%" + search + "%"
                }
            },
            include: [
                { association: "usuario" },
                { association: "comentarios" }
            ]
        })
            .then(function (results) {
                return res.render("search-results", {
                    results: producto,
                    search: search
                });
            });
            .catch(function (error) {
                return res.send(error);
            })
    }
}


module.exports = productController;