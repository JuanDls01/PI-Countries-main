const { Router } = require('express');
const { getSpecificCountries, getAllDbInfo, getSpecificCountry } = require('../controllers/countryControllers');

const router = Router();
let callApi = false;

router.get('/', async (req, res, next) => {
    try {
        const {name} = req.query;
        if (name) {
            let specificCountries = await getSpecificCountries(name)
            specificCountries ?
            res.status(200).json(specificCountries) :
            res.status(404).send('No está el país, sorry');
        } else {
            let allCountries = await getAllDbInfo();
            res.status(200).json(allCountries)
        }
    }
    catch (error){
        next(error)
    }
})

router.get('/:idPais', async (req,res,next) =>{
    try {
        const {idPais} = req.params;
        let specificCountry = await getSpecificCountry(idPais)
        specificCountry ?
        res.status(200).json(specificCountry) :
        res.status(404).send('No está el país, sorry');
    } 
    catch (error) {
        next(error);
    }
})

module.exports = router;