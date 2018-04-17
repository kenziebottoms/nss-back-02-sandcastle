"use strict";

let sequelize = require('sequelize');
let createDb = require('./createDb');

createDb()
  .then((response) => {
    process.exit();
  });