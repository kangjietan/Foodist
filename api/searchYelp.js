import axios from 'axios';
import YELP_API_KEY from '../config/config.js';

const searchYelp = (term, location) => {
  const cors = 'https://cors-anywhere.herokuapp.com';
  const url = 'https://api.yelp.com/v3/businesses/search';

  const options = {
    method: 'GET',
    headers: { Authorization: YELP_API_KEY },
    params: {
      term,
      location,
    },
    url: `${cors}/${url}`,
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

export default searchYelp;
