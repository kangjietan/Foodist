import React from 'react';

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

export default Rating;
