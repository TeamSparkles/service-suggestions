const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const Model = require('./../database/models/suggestions');


const app = express();

mongoose.connect('mongodb://localhost/meetup_suggestions');

app.use('/event/:eventid/suggestions', express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());

app.get('/api/event/:eventid', (req, res) => {
  const eventId = `${req.params.eventid}`;
  Model.Suggestions.findOne({ id: eventId })
    .select('-_id')
    .then((data) => {
      res.send(data);
    });
});

module.exports = app;
