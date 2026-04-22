const data = require('../localdata/data');
const listaProductos = data.productos;
const usuario = data.usuario

const  userController = {
    login: function (req, res){
        res.render('login');
    },

    register: function (req, res){
        res.render('register')
    },

    profile: function(req,res){
        res.render('profile', {
            usuario: usuario,
            listaProductos: listaProductos })
    },
    logout: function(req, res){
        res.render('login')
    }
};

module.exports = userController;