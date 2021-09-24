const router = require('express').Router();
const { Reviews, VideoGame, User } = require('../models');
const withAuth = require('../utils/auth');

// Get all reviews - ADD WITH AUTH AFTER TESTING
router.get('/', async (req, res) => {
  try {
    const reviewData = await Reviews.findAll({
      include: [
        {
          model: VideoGame
        },
        {
          model: User
        },
      ]
    });
    const reviews = reviewData.map((review) => review.get({ plain: true }));

    // res.render('dashboard', { 
    //     reviews, 
    //     loggedIn: req.session.loggedIn 
    //   });
    res.json(reviews);


  } catch (err) {
    res.status(500).json(err)
  }
});

// Get review by ID
router.get('/reviews/:id', async (req, res) => {
  try {
    const reviewData = await Reviews.findByPk(req.params.id, {
      include: [
        {
          model: VideoGame
        },
        {
          model: User
        }
      ]
    });

    const review = reviewData.get({ plain: true });

    // res.render('review', {
    //   ...review,
    //   loggedIn: req.session.loggedIn
    // });
    res.json(review);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        {
          model: VideoGame
        },
        {
          model: User
        }
      ]
    });

    const user = userData.get({ plain: true });

    // res.render('dashboard', {
    //   ...user,
    //   loggedIn: true
    // });

    res.json(user);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;