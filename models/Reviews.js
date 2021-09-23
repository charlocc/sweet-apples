const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reviews extends Model {}

Reviews.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primarykey: true,
            autoIncrement: true,
        },
        videogame_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            references: {
                model: 'videogame',
                key: 'id',
            }, 
        },
        videogame_name: {
             type: Datatypes.STRINGS,
        },
        review_description: {
            type: Datatypes.STRING,
        },
        user_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            } 
        },
    },
    {
        sequelize, 
        timestamps: false, 
        freezeTableName: true,
        underscored: true,
        modelName: 'reviews'
    }
);

module.exports = Reviews;
