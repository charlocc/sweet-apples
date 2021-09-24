const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');


class VideoGame extends Model {}

VideoGame.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        videogame_name: {
            type: Datatypes.STRING,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        undescored: true, 
        modelName: 'videogame'
    }
);

module.exports = VideoGame;