const data = require('../localdata/data');
const listaProductos = data.productos;
const usuario = data.usuario
const bcrypt = require("bcryptjs");
const db = require ("../database/models")


const  userController = {
    loginprocess: function (req, res){
        let check = bcrypt.compareSync(body.contrasena, passEncriptada);
        res.render('login');
    },
    login: function (req, res){
        res.render('login')
    },

    registerprocess: function(req, res) {
        let { username, name, email, password } = req.body;
        let hashedPassword = bcrypt.hashSync(password, 10);

        db.User.create({
            username: username,
            name: name,
            email: email,
            contrasenia: hashedPassword
        })
            .then(function() {
                return res.redirect("/");
            })
            .catch(function(error) {
                console.log(error);
            });
        res.render('register')
    },
    register: function(req, res){
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