const Dish = require('../models/dish.js');
const db = require('../index.js');
const data = require('../../data.js');

Dish.insertMany(data.dishes, (error, docs) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Inserted dishes into db');
  }
});
