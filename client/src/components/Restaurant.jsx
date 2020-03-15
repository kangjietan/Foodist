import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating.jsx';

// Format the food topics
const topics = (list) => {
  let categories = '';
  list.forEach((entry) => { categories += `${entry.title}, `; });
  categories = categories.substring(0, categories.length - 2);
  return categories;
};

// Format the transaction types
const methods = (list) => {
  let categories = '';
  list.forEach((entry) => { categories += `${entry}, `; });
  categories = categories.substring(0, categories.length - 2);
  categories = categories.split('_').join(' ');
  return categories;
};

const Restaurant = ({ entry }) => (
  <div className="restaurant-container">
    <div className="restaurant-image-box">
      <img src={entry.image_url} alt="" className="restaurant-image" />
    </div>
    <div className="restaurant-info-box">
      <div className="restaurant-info">
        <div className="main-info">
          <div className="main-name">{entry.name}</div>
          <div>{entry.location.address1}</div>
          <div>{entry.display_phone}</div>
        </div>
        <div className="misc-info">
          <Rating rating={entry.rating} />
          <div>{`${entry.review_count} ratings`}</div>
          <div>{entry.price}</div>
        </div>
      </div>
      <div className="catergory-transactions-box">
        {topics(entry.categories)}
        <div>{`Offers: ${methods(entry.transactions)}`}</div>
      </div>
    </div>
  </div>
);

Restaurant.propTypes = {
  entry: PropTypes.shape({
    name: PropTypes.string,
    image_url: PropTypes.string,
    location: PropTypes.object,
    display_phone: PropTypes.string,
    review_count: PropTypes.number,
    rating: PropTypes.number,
    price: PropTypes.string,
    categories: PropTypes.array,
    transactions: PropTypes.array,
  }).isRequired,
};

export default Restaurant;
