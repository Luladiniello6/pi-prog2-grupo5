const producto = require('../localdata/data');
const listaProductos = producto.productos; 

const  userController = {
    login: function (req, res){
        res.render('login');
    },

    register: function (req, res){
        res.render('register')
    },

    profile: function(req,res){
        res.render('profile', {listaProductos: usuario})
    }
};

module.exports = userController;