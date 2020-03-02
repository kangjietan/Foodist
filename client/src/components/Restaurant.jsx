import React from 'react';
import PropTypes from 'prop-types';

const Restaurant = ({ entry }) => (
  <div className="restaurant-container">
    <div className="restaurant-image-box">
      <img src={entry.image_url} alt="" className="restaurant-image" />
    </div>
    <div className="restaurant-info-box">
      <div className="restaurant-info">
        <div>{entry.name}</div>
        <div>{entry.location.address1}</div>
        <div>{entry.display_phone}</div>
        <div>{entry.review_count}</div>
        <div>{entry.rating}</div>
        <div>{entry.price}</div>
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
  }),
};

Restaurant.defaultProps = {
  entry: {},
};

export default Restaurant;
