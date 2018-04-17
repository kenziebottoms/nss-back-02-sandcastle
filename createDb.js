"use strict";

const sequelize = require('sequelize');
const qi = require('sequelize/lib/query-interface');
const app = require('./app');
const models = require('./models');

const { lifeguards } = require('./seeders/data/lifeguards');
const { beaches } = require('./seeders/data/beaches');

module.exports = (qi) => {
  console.log(lifeguards);
  return models.sequelize.sync({ force: true })
    .then(qi => {
      return models.Beach.bulkCreate(beaches);
    })
    .then(qi => {
      return models.Lifeguard.bulkCreate(lifeguards);
    })
    .then(qi => {
      process.exit();
    })
    .catch(err => {
      console.log(err);
    });
};