import React from 'react';
import PropTypes from 'prop-types';

const Marker = ({ color, idx }) => (
  <div className="marker" style={{ backgroundColor: color, cursor: 'pointer' }}>{idx}</div>
);

export default Marker;
