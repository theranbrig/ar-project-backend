'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the user',
  },
  password: {
    type: String,
    required: 'Kindly enter a password',
  },
  email: {
    type: String,
    required: 'Kindly enter an email address',
  },

  created_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Users', UserSchema);
