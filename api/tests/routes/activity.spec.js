/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
var model = require("../../src/models/Activity");
const country = {
  name: 'Argentina',
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(pokemon)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );

    it("POST agrega un nuevo personaje y lo devuelve", function () {
      return agent
        .post("/activity")
        .send({
          name: "Rafting",
          description: "Actividad deportiva extrema",
          difficulty: 5,
          duration: 2,
          season: "summer",
          countries: ['Argentina']
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(function (res) {
          expect(res.body).to.eql({
            name: "Harry",
            houseId: 1,
            lastName: "Potter",
            dateOfBirth: "31-07-1980",
            yearOfBirth: 1980,
            isMuggle: false,
            wand: {},
            spells: [],
          });
          expect(model.listCharacters()).to.have.length(1);
          expect(model.listCharacters()[0].name).to.eql("Harry");
        });
    });
  });
});
