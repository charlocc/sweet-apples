const router = require('express').Router();
const { Reviews } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/', (req, res) => {
//     Reviews.findAll({
//         include: [
//             {
//                 model: VideoGame,
//                 attribute: videogame_name,
//             },
//             {
//                 model: User,
//                 attribute: username,
//             }
//         ]
//     })
// })

// Add a new review
router.post('/', withAuth, async (req,res)=> {
    try {
        const newReview = await Reviews.create({
            review_description: req.body.review_description,
            videogame_id: req.body.videogame_id,
            user_id: req.session.user_id,
        });
        res.status(200).json(newReview);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
