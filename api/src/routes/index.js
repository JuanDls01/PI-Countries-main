const { Router } = require('express');
const { postApiInfoToDb, getDbInfo } = require('../controllers');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
const COUNTRIES = '/countries';

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get(COUNTRIES, async (req, res) => {
    await postApiInfoToDb();
    const allCountries = await getDbInfo();
    //console.log(allCountries);
    const {name} = req.query;
    if (name) {
        let countryName = await allCountries.filter(el => el.name.toLowerCase().include(name.toLowerCase()));
        countryName?
        res.status(200).send(countryName):
        res.status(404).send('No está la ciudad, sorry')
    } else {
        res.status(200).send(allCountries)
    }
})


module.exports = {
    index: router
};
