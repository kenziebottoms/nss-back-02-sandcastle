"use strict";

const sequelize = require('sequelize');
const qi = require('sequelize/lib/query-interface');
const app = require('./app');
const models = require('./models');

const { lifeguards } = require('./seeders/data/lifeguards');
const { beaches } = require('./seeders/data/beaches');
const { castles } = require('./seeders/data/castles');

const createDb = qi => {
  return models.sequelize.sync({ force: true })
    .then(qi => {
      return models.Beach.bulkCreate(beaches);
    })
    .then(qi => {
      return models.Lifeguard.bulkCreate(lifeguards);
    })
    .then(qi => {
      return models.Castle.bulkCreate(castles);
    })
    .then(response => {
      process.exit();
    })
};

createDb();