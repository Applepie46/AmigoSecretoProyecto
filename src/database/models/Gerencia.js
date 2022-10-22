module.exports = (sequelize, dataTypes) => {
    let alias = "Gerencia"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            notNull: true,
            unique: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(45),
            notNull: true
        },
        grupos_id: {
            type: dataTypes.INTEGER
        }

    }

    let config = {
        tableName: "gerencia",
        timestamps: false,
        underscored: true
    };

    const Gerencia = sequelize.define(alias, cols, config);

    Gerencia.associate = function(models){

        Gerencia.belongsTo(models.MicroCosmos, {
            as: 'gerencia',
            foreignKey: 'grupos_id'
        }),
        Gerencia.hasMany(models.Usuario, {
            as: "grupo",
            foreignKey: "gerencias_id"
        })
        

    }

    return Gerencia;
};