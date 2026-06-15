module.exports = function (sequelize, dataTypes) {
    let alias = 'Comentario';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idUsuario: {
            type: dataTypes.INTEGER
        },
        idProducto: {
            type: dataTypes.INTEGER
        },
        comentario: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: 'comentarios',
        timestamps: true
    };
    
    const Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function(models){
        Comentario.belongsTo(models.User, {
            as: "usuario",
            foreignKey: "idUsuario"
        });
        Comentario.belongsTo(models.Producto, {
            as: "producto",
            foreignKey: 'idProducto'
        });
    }
    return Comentario;
}