const router = require('express').Router();
const { Theatre, Movie, NowPlaying } = require('../../models');

router.get('/', (req, res) => {
  Theatre.findAll({
    include: [
      {
        model: Movie,
        through: NowPlaying,
      },
    ],
  })
    .then((Theatres) => res.status(200).json(Theatres))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  Theatre.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Movie,
        through: NowPlaying,
      },
    ],
  })
    .then((Theatre) => res.status(200).json(Theatre))
    .catch((err) => res.status(404).json(err));
});

router.post('/', (req, res) => {
  Theatre.create(req.body)
    .then((Theatre) => res.status(200).json(Theatre))
    .catch((err) => res.status(404).json(err));
});

router.put('/:id', (req, res) => {
  Theatre.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((Theatre) => res.status(200).json(Theatre))
    .catch((err) => res.status(404).json(err));
});

router.delete('/:id', (req, res) => {
  Theatre.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((Theatre) => res.status(200).json(Theatre))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
