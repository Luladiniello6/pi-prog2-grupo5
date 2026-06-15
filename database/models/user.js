module.exports = function (sequelize, dataTypes){

    let alias = 'User'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        username: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        fotoDePerfil: {
            type: dataTypes.STRING
        }

    }

    let config = {
        tableName : "usuarios",
        timestamps:true
    };

    const User = sequelize.define(alias, cols, config);
    User.associate = function(models){
        User.hasMany(models.Producto,{
            as: "productos",
            foreignKey: "idUsuario"
        });
        User.hasMany(models.Comentario,{
            as: "comentarios",
            foreignKey: "idUsuario"
        });
    }
    return User;
}