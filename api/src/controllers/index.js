'use strict';
const axios = require('axios');

var characters = []; 

var houses = []; 



module.exports = {
  getApiInfo: async () => {
    const apiUrl = await axios.get('https://restcountries.com/v3/all');
    //Ahora solo me traigo la info que necesito de la Api:
    const apiInfo = await apiUrl.data.map(el => {
      return {
        id: el.cca3,
        name: el.name.common,
        imgFlag: el.flags[0],
        continent: el.region,
        capital: el.capital,
        subregion: el.subregion,
        area: el.area,
        population: el.population,
      }
    })
  },
  getDbInfo: async () => {
    //return await 
  },
}