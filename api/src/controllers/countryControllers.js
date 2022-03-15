const axios = require('axios');
const { Country, Activity } = require('../db.js');
const { DataTypes, Op } = require('sequelize');

const getApiInfo = async () => {
    //Me traigo toda la info de la api:
    const apiUrl = await axios.get('https://restcountries.com/v3/all');
    const apiInfo = await apiUrl.data.map(el => {
        if(el.capital){
            return {
                id: el.cca3,
                name: el.translations.spa.common,
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
                name: el.translations.spa.common,
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

const postApiInfoToCountryDb = async () => {
    const apiInfo = await getApiInfo();
    await apiInfo.forEach(async el => await Country.create(el));
};

const getSpecificCountry = async (idPais) => {
    const specificCountry = await Country.findOne({
        where: {
            id: idPais,
        },
        include: {
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season' ]
        },
    });
    return specificCountry;0
}

const getSpecificCountries = async (name) => {
    const nameUpper = name.charAt(0).toUpperCase() + name.slice(1);
    const specificInfo = await Country.findAll({
        where: {
            name: {
                [Op.or]: {
                    [Op.like]: `%${nameUpper}%`
                }
            }
        }
    })
    //console.log(specificInfo);
    return specificInfo;
}

const getAllDbInfo = async () => {
    const dbInfo = await Country.findAll({
        include: {
            model: Activity,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    })
    return dbInfo;
};


module.exports = {
    postApiInfoToCountryDb,
    getAllDbInfo,
    getSpecificCountries,
    getSpecificCountry,
}