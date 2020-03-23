// const webpack = require('webpack');

const path = require('path');

// const dotenv = require('dotenv').config({ path: `${__dirname}/.env` });
const Dotenv = require('dotenv-webpack');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new Dotenv(),
  ],
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env.YELP_API_KEY': JSON.stringify(dotenv.parsed.YELP_API_KEY),
  //     'process.env.GOOGLE_API_KEY': JSON.stringify(dotenv.parsed.GOOGLE_API_KEY),
  //   }),
  // ],
};
