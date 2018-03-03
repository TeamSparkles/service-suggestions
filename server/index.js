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
  Model.Suggestions.find({ category: 'Animals' })
    .select('-_id')
    .limit(5)
    .then((data) => {
      res.send(data);
    });
});

module.exports = app;
