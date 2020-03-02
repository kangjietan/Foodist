import React from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant.jsx';

const RestaurantsList = ({ list }) => (
  <div className="restaurant-list-container container">
    {list.map((entry, index) => <Restaurant entry={entry} key={index} />)}
  </div>
);

RestaurantsList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default RestaurantsList;
