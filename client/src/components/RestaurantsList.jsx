import React from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant.jsx';

const RestaurantsList = ({ list }) => (
  <div className="container">
    {list.map((entry) => <Restaurant entry={entry} />)}
  </div>
);

RestaurantsList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default RestaurantsList;
