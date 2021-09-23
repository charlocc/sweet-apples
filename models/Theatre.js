const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Theatre extends Model {}

Theatre.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    theatre_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'theatre',
  }
);

module.exports = Theatre;
