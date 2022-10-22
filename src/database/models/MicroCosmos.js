module.exports = (sequelize, dataTypes) => {
    let alias = "MicroCosmos"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            notNull: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(45),
            notNull: true
        },

    }

    let config = {
        tableName: "microcosmos",
        timestamps: false,
        underscored: true
    };

    const MicroCosmos = sequelize.define(alias, cols, config);

    MicroCosmos.associate = (models) => {

        MicroCosmos.hasmany(models.Gerencia, {
            as: 'gerencia',
            foreignKey: 'grupos_id'
        })

    }

    return MicroCosmos;
};