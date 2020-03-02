import React from 'react';
import PropTypes from 'prop-types';

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
          <div>{`${entry.rating}/5`}</div>
          <div>{`${entry.review_count} ratings`}</div>
          <div>{entry.price}</div>
        </div>
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
  }).isRequired,
};

export default Restaurant;
