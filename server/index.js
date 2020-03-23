// Import the express framework for our node server
const express = require('express');
// Import the path module from node to create absolute file paths for express static
const path = require('path');
// Import controllers
// const Dish = require('../database/controllers/dish.js');
// Import the yelp search helper function
const searchYelp = require('../api/searchYelp.js');
// Instantiate the express server
const app = express();
// Set a constant for the port that our express server will listen on
const PORT = process.env.PORT || 3000;
// Serve static files. Any requests for specific files will be served if they exist in the provided folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// Get all dishes from database
app.get('/dishes', (req, res) => {
  Dish.getAllDishes()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

// Search the yelp api
app.get('/yelp/search', (req, res) => {
  const params = req.query;
  searchYelp(params)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Need HTTPS
// Search the yelp api by location
// app.get('/yelp/search/coordinates', (req, res) => {
//   const params = req.query;
//   searchYelp(params)
//     .then((response) => {
//       res.json(response.data);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.json(err);
//     });
// });

// Start the server on the provided port
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
