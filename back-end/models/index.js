const mongoose = require('mongoose');
const User = require('./User');
const Short = require('./Shorts');
const Journal = require('./Journal');

mongoose.connect('mongodb://127.0.0.1:27017/shortsdb', { useNewUrlParser: true, useUnifiedTopology: true });
//export module
module.exports = {
  User,
  Short,
  Journal
};
