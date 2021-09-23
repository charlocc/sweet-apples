const seedmovies = require('./movie-seeds');

const seedtheatres = require('./theatre-seeds');
const seedproducttheatres = require('./now-playing-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedmovies();
  console.log('\n----- movies SEEDED -----\n');

  await seedtheatres();
  console.log('\n----- theatres SEEDED -----\n');

  await seedproducttheatres();
  console.log('\n----- NowPlaying SEEDED -----\n');

  process.exit(0);
};

seedAll();
