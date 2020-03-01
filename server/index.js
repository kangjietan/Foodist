// Import the express framework for our node server
const express = require('express');
// Import the path module from node to create absolute file paths for express static
const path = require('path');

// const cors = require('cors');

// Instantiate the express server
const app = express();
// Set a constant for the port that our express server will listen on
const PORT = 3000;

// Cors
// app.use(cors());

// Serve static files. Any requests for specific files will be served if they exist in the provided folder
app.use(express.static(path.join(__dirname, '../client/dist')));
// Start the server on the provided port
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
