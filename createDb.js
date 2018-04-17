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
      console.log("sunc");
      return models.Beach.bulkCreate(beaches);
    })
    .then(qi => {
      console.log("beaches created");
      return models.Lifeguard.bulkCreate(lifeguards);
    })
    // .then(qi => {
    //   console.log("lifeguards created");
    //   return models.Castle.bulkCreated(castles);
    // })
    .then(response => {
      console.log("castles created");
      process.exit();
    })
    .catch(err => console.log(err));
};

createDb();