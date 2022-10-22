module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario"
    let cols = {
        idUsuario: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            notNull: true,
            unique: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            notNull: true
        },
        email: {
            type: dataTypes.STRING,
            notNull: true
        },
        password: {
            type: dataTypes.STRING,
            notNull: true
        },
        rolUsuario: {
            type: dataTypes.INTEGER,
            notNull: true
        }

    }

    let config = {
        tableName: "usuarios",
        timestamps: false,
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = (models) => {

        Usuario.belongsTo(models, {
            as: 'publisher',
            foreignKey: 'publisher_id'
        })

    }

    return Usuario;
};