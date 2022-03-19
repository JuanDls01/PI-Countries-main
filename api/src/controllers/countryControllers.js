const axios = require('axios');
const { Country, Activity } = require('../db.js');
const { DataTypes, Op } = require('sequelize');


const postApiInfoToCountryDb = async () => {
    const apiUrl = await axios.get('https://restcountries.com/v3/all');
    const apiInfo = await apiUrl.data.map(el => {
        return {
            id: el.cca3,
            name: el.translations.spa.common,
            imgFlag: el.flags[0],
            continent: el.continents[0],
            capital: el.capital? el.capital[0] : 'no cap',
            subregion: el.subregion,
            area: el.area,
            population: el.population,
        }
    });
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
    return specificCountry;
}

const getSpecificCountries = async (name) => {
    //Trabajo los nombres para que si o si coincidan con los de mi db:
    const nameLower = name.toLowerCase();
    const nameArr = nameLower.split(' ');
    const nameArrUpper = nameArr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const nameUpper = nameArrUpper.join(' ');
    const specificInfo = await Country.findAll({
        where: {
            name: {
                [Op.or]: { //Está alpedo pero bue
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
    //console.log(dbInfo);
    return dbInfo;
};


module.exports = {
    postApiInfoToCountryDb,
    getAllDbInfo,
    getSpecificCountries,
    getSpecificCountry,
}