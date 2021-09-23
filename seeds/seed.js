const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./userData.json');
const videogameData = require(`./videogameData.json`)
const reviewData = require(`./reviewData.json`)


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      });

      const users = await User.bulkCreate(videogameData, {
    });

    const users = await User.bulkCreate(reviewData, {
    });
    process.exit(0);
}
    seedDatabase();