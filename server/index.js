const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const Model = require('./../database/models/suggestions');


const app = express();

mongoose.connect('mongodb://localhost/meetup_suggestions');

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use('/event/:eventid/suggestions', express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());

app.get('/api/event/:eventid', (req, res) => {
  const eventId = `${req.params.eventid}`;
  Model.Suggestions.findOne({ id: eventId })
    .select('category -_id')
    .then((data) => {
      res.send(data);
    });
});

app.get('/suggestions', (req, res) => {
  const category = `${req.query.category}`;
  const id = `${req.query.id}`;
  Model.Suggestions.find({ category: category, id: {$ne: id} })
    .select('-_id')
    .limit(8)
    .then((data) => {
      res.send(data);
    });
});


module.exports = app;
