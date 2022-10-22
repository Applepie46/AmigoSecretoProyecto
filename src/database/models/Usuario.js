module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario"
    let cols = {
        id: {
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
        gerencias_id: {
            type: dataTypes.INTEGER
        },
        rolUsuario: {
            type: dataTypes.INTEGER,
        }

    }

    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: true
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = (models) => {

        Usuario.belongsTo(models.Gerencia, {
            as: 'gerencias',
            foreignKey: 'gerencias_id'
        })

    }

    return Usuario;
};