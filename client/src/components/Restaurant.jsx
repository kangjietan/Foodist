import React from 'react';
import PropTypes from 'prop-types';

const Restaurant = ({ entry }) => (
  <div>
    {entry.name}
  </div>
);

Restaurant.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default Restaurant;
