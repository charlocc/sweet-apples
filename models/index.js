// import models
const Movie = require('./Movie');
const Theatre = require('./Theatre');
const NowPlaying = require('./NowPlaying');


Movie.belongsToMany(Theatre, {
  through: NowPlaying,

  foreignKey: 'movie_id',
  unique: false
});

Theatre.belongsToMany(Movie, {
  through: NowPlaying,

  foreignKey: 'theatre_id',
  unique: false
});

module.exports = {
  Theatre,
  Movie,
  NowPlaying,
};
