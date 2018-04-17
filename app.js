"use strict";

const express = require('express');
const app = express();

const { Castle, Beach, Lifeguard } = require('./models');

app.use('/beaches', (req, res, next) => {
  Beach.findAll()
    .then(beaches => {
      res.status(200).json(beaches);
    })
});

app.listen("8082");