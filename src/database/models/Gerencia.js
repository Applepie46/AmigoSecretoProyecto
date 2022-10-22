module.exports = (sequelize, dataTypes) => {
    let alias = "gerencias"
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
        tableName: "gerencias",
        timestamps: false,
        underscored: true
    };

    const Gerencia = sequelize.define(alias, cols, config);

    Gerencia.associate = function(models){

        Gerencia.belongsTo(models.microcosmos, {
            as: 'gerencias',
            foreignKey: 'grupos_id'
        }),
        Gerencia.hasMany(models.usuarios, {
            as: "grupo",
            foreignKey: "gerencias_id"
        })
        

    }

    return Gerencia;
};