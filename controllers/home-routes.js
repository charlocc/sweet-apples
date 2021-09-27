const router = require('express').Router();
const { Reviews, VideoGame, User } = require('../models');
const withAuth = require('../utils/auth');

// Get homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.loggedIn
    });
    res.status(200);
  } catch (err) {
    res.status(500).json(err)
  }
});

// Get the login page
router.get('/login', async (req, res) => {
  try {
    res.render('login')
  } catch (err) {
    res.status(500).json(err)
  }
});


// Get review by ID
// router.get('/reviews/:id', async (req, res) => {
//   try {
//     const reviewData = await Reviews.findByPk(req.params.id, {
//       include: [
//         {
//           model: VideoGame
//         },
//         {
//           model: User
//         }
//       ]
//     });

//     const review = reviewData.get({ plain: true });

//     res.render('review', {
//       ...review,
//       loggedIn: req.session.loggedIn
//     });
//     res.json(review);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route
router.get('/dashboard', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    // const userData = await User.findByPk(req.session.user_id, {
    //   attributes: { exclude: ['password'] },
    //   // include: [
    //   //   {
    //   //     model: Reviews
    //   //   }
    //   // ]
    // });

    // const user = userData.get({ plain: true });


    const videoGameData = await VideoGame.findAll();
    const videogames = videoGameData.map((videogame) => videogame.get({ plain: true }));

    res.render('dashboard', {
      // ...user, 
      // ...reviews,
      videogames,
      loggedIn: req.session.loggedIn
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// Find by Id
router.get('/videogames/:id', async (req, res) => {

  try {

    const videogameData = await VideoGame.findByPk(req.params.id, {
      include: [Reviews]
    })
    const videogame = videogameData.get({ plain: true });


    res.render('reviews', {
      videogame,
      loggedIn: req.session.loggedIn
    });

  } catch (err) {
    res.status(400).json(err);
  }

})

module.exports = router;