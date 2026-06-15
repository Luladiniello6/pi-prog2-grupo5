const data = require('../localdata/data');
const listaProductos = data.productos;
const listaComentarios = data.comentarios
const usuario = data.usuario;

const db = require('../database/models');
const { Op } = require('sequelize');
const { validationResult } = require('express-validator');

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

    guardarProducto: function (req, res) {

        if (!req.session.userLogged) {
            return res.redirect('/users/login');
        }
        let errores = validationResult(req);

        if (!errores.isEmpty()) {
            return res.send(errores.mapped())
        }

        db.Producto.create({
            idUsuario: req.session.userLogged.id,
            nombre: req.body.nombre,
            fotoDeImagen: req.body.foto,
            descripcion: req.body.descripcion
        })
            .then(function () {
                return res.redirect('/');
            })
            .catch(function (error) {
                return res.send(error);
            })
    },

    editarProducto: function (req, res) {

        if (!req.session.userLogged) {
            return res.redirect('/users/login')
        }

        db.Producto.findByPk(req.params.id)

            .then(function (producto) {
                if (producto.idUsuario != req.session.userLogged.id) {
                    return res.redirect('/');
                }
                return res.render('product-edit', {
                    producto: producto
                });
            })

            .catch(function (error) {
                return res.send(error);
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
                    results: results,
                    search: search
                });
            })
            .catch(function (error) {
                return res.send(error);
            })
    },
    guardarComentario: function (req, res) {
        if (!req.session.userLogged) {
            return res.redirect('/users/login');
        }

        db.Comentario.create({
            idUsuario: req.session.userLogged.id,
            idProducto: req.params.id,
            comentario: req.body.comentario
        })
            .then(function () {
                return res.redirect('/productos/detalle/' + req.params.id);
            })
            .catch(function (error) {
                return res.send(error);
            });
    },

    eliminarProducto: function (req, res) {

        if (!req.session.userLogged) {
            return res.redirect('/users/login');
        }

        db.Producto.findByPk(req.params.id)

            .then(function (producto) {
                if (!producto) {
                    return res.redirect('/');
                }
                if (producto.idUsuario != req.session.userLogged.id) {
                    return res.redirect('/');
                }
                return db.Producto.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                    .then(function () {
                        return res.redirect('/');
                    })
                    .catch(function (error) {
                        return res.send(error);
                    })
            })
    }
}


module.exports = productController;