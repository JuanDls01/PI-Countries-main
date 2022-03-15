const { Router } = require('express');


const router = Router();

router.get('/', async (req,res,next) => {
    try{
        res.send('Hola como andas');
    } catch (error) {
        next(error);
    }
})

module.exports = router;