require("dotenv").config();

const axios = require("axios");

const { YELP_API_KEY } = process.env;

const searchYelp = (params) => {
  const url = "https://api.yelp.com/v3/businesses/search";

  const options = {
    method: "GET",
    headers: {
      Authorization: YELP_API_KEY,
      "X-Requested-With": "XMLHttpRequest",
    },
    params,
    url,
  };

  return new Promise((resolve, reject) => {
    axios(options)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = searchYelp;
