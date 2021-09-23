const { Movie } = require('../models');

const MovieData = [
  {
    movie_name: 'Pig',
  },
  {
    movie_name: 'Bridesmaids',
  },
  {
    movie_name: 'American Animals',
  },
  {
    movie_name: 'The Godfather',
  },
  {
    movie_name: 'Eternal SUnshine of the Spotless Mind',
  },
  {
    movie_name: 'Real Genius',
  },
  {
    movie_name: 'Nobody',
  },
  {
    movie_name: 'Bill and Ted Face the Music',
  },
];

const seedMovies = () => Movie.bulkCreate(MovieData);

module.exports = seedMovies;
