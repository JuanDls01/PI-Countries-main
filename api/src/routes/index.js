const { Router } = require('express');
const { postApiInfoToCountryDb } = require('../controllers/countryControllers');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRouter = require('./countries.js');
const activitiesRouter = require('./activity.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countriesRouter);
router.use('/activity', activitiesRouter);
// router.post('/', async (req, res, next) =>{
//     try{
//         await postApiInfoToCountryDb();
//         res.send('Se busco la info de la API')
//     } catch (error){
//         next(error);
//     }
// });


module.exports = router;
