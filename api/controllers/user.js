'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('Users');

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.read_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.delete_a_user = function(req, res) {
  Task.remove(
    {
      _id: req.params.userId,
    },
    function(err, user) {
      if (err) res.send(err);
      res.json({ message: 'User successfully deleted' });
    }
  );
};
