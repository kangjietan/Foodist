import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => (
  <div className="rating">
    <div className="rating-upper" style={{ width: `${(rating / 5) * 100}%` }}>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
    <div className="rating-lower">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
  </div>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
