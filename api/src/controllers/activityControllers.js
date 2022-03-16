const { Country, Activity } = require('../db.js');
const { DataTypes, Op } = require('sequelize');

const activityCreator = async (name, difficulty, duration, season, countries) => {
    let activityCreated = await Activity.create({
        name,
        difficulty,
        duration,
        season
    });
    let countriesDb = await Country.findAll({
        where: {name: countries}
    });
    activityCreated.addCountry(countriesDb)
}

module.exports = {
    activityCreator
}