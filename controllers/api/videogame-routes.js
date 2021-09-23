const router = require('express').Router();
const withAuth = require('../../utils/auth');

// Create a new project
router.post('/', withAuth, async (req,res)=> {
    try {

    } catch (err) {
        res.status(400).json(err)
    }
});