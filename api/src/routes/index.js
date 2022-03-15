const { Router } = require('express');
const { postApiInfoToDb, getSpecificDbInfo, getAllDbInfo } = require('../controllers');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
const COUNTRIES = '/countries';

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get(COUNTRIES, async (req, res, next) => {
    try {
        const {name} = req.query;
        let allCountries = await getAllDbInfo();
        if (allCountries) {
            if (name) {
                let specificCountries = await getSpecificDbInfo(name)
                specificCountries ?
                res.status(200).json(specificCountries) :
                res.status(404).send('No está el país, sorry');
            } else {
                res.status(200).json(allCountries)
            }
        } else {
            await postApiInfoToDb();
            allCountries = await getAllDbInfo();
            if (name) {
                let specificCountries = await getSpecificDbInfo(name)
                specificCountries ?
                res.status(200).json(specificCountries) :
                res.status(404).send('No está el país, sorry');
            } else {
                res.status(200).json(allCountries)
            }
        }
    }
    catch (error){
        next(error)
    }
})


module.exports = {
    index: router
};
