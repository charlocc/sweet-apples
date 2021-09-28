const router = require('express').Router();
const { Reviews } = require('../../models');
const withAuth = require('../../utils/auth');


// Add a new review + ADD WITH AUTH AFTER TESTING
router.post('/', async (req,res)=> {
    try {
        const newReview = await Reviews.create({
            videogame_id: req.body.videogame_id,
            review_description: req.body.review_description,
            user_id: req.session.user_id,
        });
        res.status(200).json(newReview);
    } catch (err) {
        res.status(400).json(err);
    }
});


// router.delete('/:id', async (req,res) => {
//     try{
//         if (req.body.userid = req.sessions.user_id) {
//             const deleteReview = await Reviews.destroy({
//                 where:{
//                     id: req.params.id,
//                 }
//             })
//             res.status(200).json(deleteReview);
//         }
//         res.status(400).json({ failed: "You don't have authorization to delete this review."})
//     } catch(err) {
//         res.status(400).json(err);
//     }
// })


module.exports = router;
