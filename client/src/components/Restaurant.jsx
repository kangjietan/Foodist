import React from 'react';
import PropTypes from 'prop-types';

const Restaurant = ({ entry }) => (
  <div className="restaurant-container">
    <div className="restaurant-image-box">
      <img src={entry.image_url} alt="" className="restaurant-image" />
    </div>
  </div>
);

Restaurant.propTypes = {
  entry: PropTypes.shape({
    name: PropTypes.string,
    image_url: PropTypes.string,
  }),
};

Restaurant.defaultProps = {
  entry: {},
};

export default Restaurant;
