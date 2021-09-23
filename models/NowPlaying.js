const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class NowPlaying extends Model {}

NowPlaying.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    theatre_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'theatre',
        key: 'id',
      },
    },
    movie_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'movie',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'nowplaying',
  }
);

module.exports = NowPlaying;
