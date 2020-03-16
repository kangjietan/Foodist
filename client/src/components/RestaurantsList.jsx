/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurant.jsx';
import Map from './Map.jsx';

const RestaurantsList = ({ list }) => (
  <div className="restaurants-container">
    <div className="restaurant-list-container">
      {list.map((entry, idx) => <Restaurant entry={entry} key={entry.id} idx={idx + 1} />)}
    </div>
    <div className="restaurants-map-box" style={{ height: '60vh', width: '100%' }}>
      <Map restaurants={list} />
    </div>
  </div>
);

RestaurantsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.oneOf([PropTypes.object])).isRequired,
};

export default RestaurantsList;
