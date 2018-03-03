const mongoose = require('mongoose');

let suggestionsSchema = mongoose.Schema({
  id: {type: String, unique: true},
  title: String,
  photo: String,
  category: String,
  location: String,
  time: Date
});

let Suggestions = mongoose.model('suggestions', suggestionsSchema);

module.exports.Suggestions = Suggestions;