const mongoose = require('mongoose');

// localhost || database for docker
const url = 'localhost';

mongoose.connect(`mongodb://${url}/mvp`,
  { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected');
});

module.exports = db;
