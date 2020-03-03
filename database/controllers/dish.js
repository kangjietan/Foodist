const Dish = require('../models/dish.js');
const db = require('../index.js');

const getAllDishes = () => new Promise((resolve, reject) => {
  Dish.find({}, (error, docs) => {
    if (error) reject(error);
    resolve(docs);
  });
});

module.exports = {
  getAllDishes,
};
