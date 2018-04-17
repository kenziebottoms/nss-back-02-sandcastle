"use strict";

const sequelize = require('sequelize');
const qi = require('sequelize/lib/query-interface');
const app = require('./app');
const models = require('./models');

const { lifeguards } = require('./seeders/data/lifeguards');
const { beaches } = require('./seeders/data/beaches');
const { castles } = require('./seeders/data/castles');

module.exports = (qi) => {
  models.sequelize.sync({ force: true })
    .then(qi => {
      return Promise.all([
        models.Beach.bulkCreate(beaches),
        models.Lifeguard.bulkCreate(lifeguards),
        models.Castle.bulkCreate(castles)
      ]);
    })
    .then(qi => process.exit())
    .catch(err => console.log(err));
};