module.exports = function (sequelize, dataTypes) {

    let alias = 'Producto'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idUsuario: {
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        fotoDeImagen: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        }

    }

    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: true,
    };

    const Product = sequelize.define(alias, cols, config);

    return Product;

}