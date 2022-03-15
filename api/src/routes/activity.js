const { Router } = require('express');
const { activityCreator } = require('../controllers/activityControllers.js')


const router = Router();

router.post('/', async (req,res,next) => {
    try{
        let {name, difficulty, duration, season, countries} = req.body;
        activityCreator(name, difficulty, duration, season, countries);
        res.send('Character created succesfully');
    } catch (error) {
        next(error);
    }
})

module.exports = router;