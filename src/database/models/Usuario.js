module.exports = (sequelize, dataTypes) => {
    let alias = "usuarios"
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
        contrasenia: {
            type: dataTypes.STRING,
            notNull: true
        },
        gerencias_id: {
            type: dataTypes.INTEGER
        },
        rolUsuario: {
            type: dataTypes.INTEGER,
            field: 'rolUsuario'
        },
        gustos: {
            type: dataTypes.STRING,
            notNull: true
        },
        disgusto: {
            type: dataTypes.STRING,
            notNull: true
        },
        alegrias: {
            type: dataTypes.STRING,
            notNull: true
        },
        amigoSecreto: {
            type: dataTypes.STRING,
            notNull: true,
            field: 'amigoSecreto'
        },

    }

    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: true
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = (models) => {

        Usuario.belongsTo(models.gerencias, {
            as: 'gerencias',
            foreignKey: 'gerencias_id'
        })

    }

    return Usuario;
};