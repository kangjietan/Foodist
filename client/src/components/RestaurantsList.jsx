/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant.jsx';

const RestaurantsList = ({ list }) => (
  <div className="restaurant-list-container container">
    {list.map((entry) => <Restaurant entry={entry} key={entry.id} />)}
  </div>
);

RestaurantsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.oneOf([PropTypes.object])),
};

RestaurantsList.defaultProps = {
  list: [],
};

export default RestaurantsList;
