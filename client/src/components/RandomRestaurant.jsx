import React from 'react';

const RandomRestaurant = ({ restaurant }) => (
  <div className="container random-container">
    <div>{restaurant.location.address1}</div>
  </div>
);

export default RandomRestaurant;
