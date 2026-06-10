const data = require('../localdata/data');
const listaProductos = data.productos;
const usuario = data.usuario
const bcrypt = require("bcryptjs");
const db = require("../database/models")


const userController = {
    loginprocess: function (req, res) {

        let user = {
            email: req.body.email,
            pass: req.body.contrasena,
            recordarme: req.body.recordarme
        }

        //buscar el usuario por mail con un findOne();

        db.User.findOne({
            where: [{ email: user.email }]
        })

            .then(function (usuarioDb) {
                if (usuarioDb == null) {
                    return res.send("El email no stá registrado")

                }
                let check = bcrypt.compareSync(user.pass, usuarioDb.contrasenia);
                if (check) {
                    //return res.send ('logueado correctamente')
                    req.session.userLogged = usuarioDb;
                    if (req.body.recordarme != undefined) {
                        res.cookie("userLogged", usuarioDb, { maxAge: 600000 });
                    }
                    return res.redirect('/');
                };





            })
    },
    login: function (req, res) {
        res.render('login')
    },

    registerprocess: function (req, res) {
        let { username, email, password } = req.body;
        let hashedPassword = bcrypt.hashSync(password, 10);

        db.User.create({
            username: username,
            email: email,
            contrasenia: hashedPassword
        })
            .then(function () {
                return res.redirect("/");
            })
            .catch(function (error) {
                console.log(error);
            });
        res.render('register')
    },
    register: function (req, res) {
        res.render('register')
    },

    profile: function (req, res) {
        res.render('profile', {
            usuario: usuario,
            listaProductos: listaProductos
        })
    },
    logout: function (req, res) {
        req.session.destroy();
        res.clearCookie("userLogged");
        return res.redirect("/")
    }
};

module.exports = userController;