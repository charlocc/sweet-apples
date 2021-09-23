const router = require('express').Router();
const { Movie, Theatre, NowPlaying } = require('../../models');

router.get('/', (req, res) => {
  Movie.findAll({
    include: [
      {
        model: Theatre,
        through: NowPlaying,
      },
    ],
  })
    .then((Movies) => res.status(200).json(Movies))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  Movie.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Theatre,
        through: NowPlaying,
      },
    ],
  })
    .then((Movie) => res.status(200).json(Movie))
    .catch((err) => res.status(404).json(err));
});

router.post('/', (req, res) => {
  Movie.create(req.body)
    .then((Movie) => res.status(200).json(Movie))
    .catch((err) => res.status(404).json(err));
});

router.put('/:id', (req, res) => {
  Movie.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((Movie) => res.status(200).json(Movie))
    .catch((err) => res.status(404).json(err));
});

router.delete('/:id', (req, res) => {
  Movie.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((Movie) => res.status(200).json(Movie))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
