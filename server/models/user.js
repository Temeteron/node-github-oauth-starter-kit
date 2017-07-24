var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create User Schema
var User = new Schema({
  _id: String,
  name: String,
  __v: Number,
  someID: String,
  accessToken: String
});


module.exports = mongoose.model('users', User);
