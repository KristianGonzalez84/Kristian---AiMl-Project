module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define('Recipe', {
        recipeId: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },

        description: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false
        },

        image: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
    }, {
        timestamps: false
    });

    return Recipe;
};