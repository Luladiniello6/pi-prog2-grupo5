const data = require('../localdata/data');
const listaProductos = data.productos;
const Usuario = data.usuario

const  userController = {
    login: function (req, res){
        res.render('login');
    },

    register: function (req, res){
        res.render('register')
    },

    profile: function(req,res){
        let usuario
        res.render('profile', {usuario: Usuario,
            listaProductos: listaProductos })
    },
    logout: function(req, res){
        res.render('login')
    }
};

module.exports = userController;