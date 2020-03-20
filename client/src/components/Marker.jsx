import React from 'react';
import PropTypes from 'prop-types';

const Marker = ({ color, idx }) => (
  <div className={`marker restaurant${idx}`} style={{ backgroundColor: color, cursor: 'pointer' }}>{idx}</div>
);

export default Marker;
