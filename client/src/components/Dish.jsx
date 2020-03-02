import React from 'react';
import PropTypes from 'prop-types';

const Dish = ({ entry, search }) => (
  <div className="dish-box" role="presentation" onClick={() => { search({ term: entry.dish_name }); }}>
    <div className="dish-image-box">
      <img src={entry.image_url} alt={entry.dish_name} className="dish-image" />
    </div>
    <div className="dish-name-box">
      {entry.dish_name}
    </div>
  </div>
);

Dish.propTypes = {
  entry: PropTypes.shape({
    image_url: PropTypes.string,
    dish_name: PropTypes.string,
  }).isRequired,
  search: PropTypes.func.isRequired,
};

export default Dish;
