module.exports = (sequelize, dataTypes) => {
    let alias = "fechas"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            notNull: true,
            unique: true,
            autoIncrement: true
        },
        fecha_endulzada: {
            type: dataTypes.STRING,
            notNull: true
        },
        fecha_descubrimiento: {
            type: dataTypes.STRING
        }

    }

    let config = {
        tableName: "fechas",
        timestamps: false,
        underscored: true
    };

    const Fechas = sequelize.define(alias, cols, config);
    return Fechas;
};