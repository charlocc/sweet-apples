const { NowPlaying } = require('../models');

const nowPlayingData = [
  {
    theatre_id: 1,
    movie_id: 6,
  },
  {
    theatre_id: 1,
    movie_id: 7,
  },
  {
    theatre_id: 1,
    movie_id: 8,
  },
  {
    theatre_id: 2,
    movie_id: 6,
  },
  {
    theatre_id: 3,
    movie_id: 1,
  },
  {
    theatre_id: 3,
    movie_id: 3,
  },
  {
    theatre_id: 3,
    movie_id: 4,
  },
  {
    theatre_id: 3,
    movie_id: 5,
  },
  {
    theatre_id: 4,
    movie_id: 1,
  },
  {
    theatre_id: 4,
    movie_id: 2,
  },
  {
    theatre_id: 4,
    movie_id: 8,
  },
  {
    theatre_id: 5,
    movie_id: 3,
  },
];

const seedtheatremovies = () => NowPlaying.bulkCreate(nowPlayingData);

module.exports = seedtheatremovies;
