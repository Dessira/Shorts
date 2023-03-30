const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 200
  },
  description: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required:true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  totalLikes: {
    type: Number,
    default: 0
  }
});

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;
