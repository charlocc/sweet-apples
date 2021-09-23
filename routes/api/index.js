const router = require('express').Router();
const theatreRoutes = require('./theatre-routes');
const movieRoutes = require('./movie-routes');


router.use('/theatres', theatreRoutes);
router.use('/movies', movieRoutes);


module.exports = router;
