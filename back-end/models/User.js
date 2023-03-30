const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 20
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 20
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    maxlength: 30
  },
  salt: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
