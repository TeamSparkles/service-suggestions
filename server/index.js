const express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


let app = express();

mongoose.connect('mongodb://localhost/meetup_suggestions');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.get('/api/event/:eventid', (req, res) => {
  const eventId = `${req.params.eventid}`;
  Model.Details.findOne({ id: eventId })
    .select('-_id')
    .then((data) => {
      res.send(data);
    });
});

module.exports = app;
