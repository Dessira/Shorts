const mongoose = require('mongoose');

const shortSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 200
  },
  content: {
    type: String,
    required: true
  },
  journal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Journal'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  }
});

const Short = mongoose.model('Short', shortSchema);

module.exports = Short;
