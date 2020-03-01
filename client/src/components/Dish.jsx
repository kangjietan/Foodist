import React from 'react';

const Dish = ({ entry }) => (
  <div className="dish-box">
    <div className="image-box">
      <img src={entry.image_url} className="dish-image" />
    </div>
    <div className="name-box">
      {entry.dish_name}
    </div>
  </div>
);

export default Dish;