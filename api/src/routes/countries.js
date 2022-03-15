const { Router } = require('express');
const { postApiInfoToDb, getSpecificCountries, getAllDbInfo, getSpecificCountry } = require('../controllers');

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const {name} = req.query;
        let allCountries = await getAllDbInfo();
        console.log(allCountries);
        if (allCountries.length) {
            if (name) {
                let specificCountries = await getSpecificCountries(name)
                specificCountries ?
                res.status(200).json(specificCountries) :
                res.status(404).send('No está el país, sorry');
            } else {
                res.status(200).json(allCountries)
            }
        } else {
            await postApiInfoToDb();
            let allCountries = await getAllDbInfo();
            if (name) {
                let specificCountries = await getSpecificCountries(name)
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

router.get('/:idPais', async (req,res,next) =>{
    try {
        const {idPais} = req.params;
        let allCountries = await getAllDbInfo();
        if (allCountries) {
            let specificCountry = await getSpecificCountry(idPais)
            specificCountry ?
            res.status(200).json(specificCountry) :
            res.status(404).send('No está el país, sorry');
        } else {
            await postApiInfoToDb();
            allCountries = await getAllDbInfo();
            let specificCountry = await getSpecificCountry(idPais)
            specificCountry ?
            res.status(200).json(specificCountry) :
            res.status(404).send('No está el país, sorry');
            }
        } catch (error) {
            next(error);
        }
})

module.exports = router;