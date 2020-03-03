const mongoose = require('mongoose');

const dishSchema = mongoose.Schema({
  dish_name: String,
  image_url: String,
}, {
  versionKey: false,
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
