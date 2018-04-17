"use strict";

const express = require('express');
const app = express();

const { Castle, Beach, Lifeguard } = require('./models');

app.use('/beaches/:id/lifeguards', (req, res, next) => {
  Beach.findById(req.params.id)
    .then(beach => {
      return Lifeguard.find({ where: { beach_id: req.params.id } })
    })
    .then(lifeguards => {
      res.status(200).json(lifeguards)
    })
    .catch(err => next(err));
})
app.use('/beaches/:id', (req, res, next) => {
  Beach.findById(req.params.id)
    .then(beach => {
      res.status(200).json(beach);
    })
    .catch(err => next(err));
});
app.use('/beaches', (req, res, next) => {
  Beach.findAll()
    .then(beaches => {
      res.status(200).json(beaches);
    })
    .catch(err => next(err));
});

app.listen("8082");