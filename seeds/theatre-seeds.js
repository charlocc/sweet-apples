const { Theatre } = require('../models');

const TheatreData = [
  {
    theatre_name: 'Regal',
  },
  {
    theatre_name: 'Edwards',
  },
  {
    theatre_name: 'Arclight',
  },
  {
    theatre_name: 'The Vista',
  },
  {
    theatre_name: 'AMC',
  },
];

const seedCategories = () => Theatre.bulkCreate(TheatreData);

module.exports = seedCategories;
