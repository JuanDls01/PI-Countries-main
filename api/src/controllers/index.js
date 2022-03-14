const axios = require('axios');
const { Country, Activity } = require('../db.js');
const { DataTypes } = require('sequelize');

const getApiInfo = async () => {
    //Me traigo toda la info de la api:
    const apiUrl = await axios.get('https://restcountries.com/v3/all');
    const apiInfo = await apiUrl.data.map(el => {
        if(el.capital){
            return {
                id: el.cca3,
                name: el.name.official,
                imgFlag: el.flags[0],
                continent: el.region[0],
                capital: el.capital[0],
                subregion: el.subregion,
                area: el.area,
                population: el.population,
            }
        } else {
            return {
                id: el.cca3,
                name: el.name.official,
                imgFlag: el.flags[0],
                continent: el.region[0],
                capital: 'no cap',
                subregion: el.subregion,
                area: el.area,
                population: el.population,
            }
        }
        
    });
    return apiInfo;
};

const postApiInfoToDb = async () => {
    const apiInfo = await getApiInfo();
    // const countryEach = apiInfo.map(el => {
    //     for (let i=0; i<el.length; i++) return el[i];
    // })
    // countryEach.forEach(el => {
    //     Country.create()
    // })
    await apiInfo.forEach(async el => await Country.create(el));
};

const getDbInfo = async () => {
    const dbInfo = await Country.findAll({
        include: {
            model: Activity,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    })
    //console.log(dbInfo);
    return dbInfo;
};


module.exports = {
    postApiInfoToDb,
    getDbInfo
}