const mongoose = require('mongoose');
const data = require('./database/seed_data/data.json');
const photodata = require('./database/seed_data/mock_photo_data.json');
const Model = require('./database/models/suggestions.js');

mongoose.connect('mongodb://localhost/meetup_suggestions');

const len = photodata.length;
const categories = ['Technology', 'Outdoors', 'Games', 'Nightlife', 'Food', 'Animals', 'Kids']

const output = [];

data.events.forEach((event) => {
  let i = 0;

  const randCat = Math.floor(Math.random() * 8);
  const randPic = Math.floor(Math.random() * len);

  const temp = {};

  temp.id = event.id;
  temp.title= event.name;
  temp.location = event.group.localized_location;
  temp.time = event.time;
  temp.photo = photodata[randPic].pictures;
  temp.category = categories[randCat];
  
  output.push(temp);
});

// iterate through each recently created obj, and save it to database;
let counter = output.length;

output.forEach((entry) => {
  counter -= 1;
  const singleEntry = new Model.Suggestions(entry);
  singleEntry.save((err) => {
    if (err) {
      console.log('ERROR', err);
    } else {
      console.log('added one entry in the database');
      if (counter === 0) {
        mongoose.disconnect();
      }
    }
  });
});
