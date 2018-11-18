'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zipCode: {
    type: Number
  },
  country: {
    type: String
  },
  topSize: {
    type: String
  },
  bottomSize: {
    type: String
  }
});

UserSchema.methods.serialize = function () {
  return {
    username: this.username || '',
    firstName: this.firstName || '',
    lastName: this.lastName || '',
    address: this.address || '',
    city: this.city,
    state: this.state,
    zipCode: this.zipCode,
    country: this.country,
    topSize: this.topSize,
    bottomSize: this.bottomSize
  };
};

UserSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.statics.hashPassword = function (password) {
  return bcrypt.hash(password, 10);
};

const User = mongoose.model('User', UserSchema);

module.exports = {
  User
};