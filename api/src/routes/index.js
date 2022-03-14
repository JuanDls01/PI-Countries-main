const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const controllers = require('../controllers');

const router = Router();
const COUNTRIES = '/countries'

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get(COUNTRIES, (req,res) =>{
    const apiInfo = controllers.getApiInfo();
});


module.exports = router;
