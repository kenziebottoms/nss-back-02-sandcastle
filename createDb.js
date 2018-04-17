"use strict";

const sequelize = require('sequelize');
const qi = require('sequelize/lib/query-interface');
const app = require('./app');
const models = require('./models');

module.exports = (qi) => {
  return models.sequelize.sync({ force: true })
    .then(qi => {

    })
    .catch(err => {
      console.log(err);
    });
};