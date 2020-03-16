import React from 'react';

const Marker = ({ color, name }) => (
  <div
    className="marker"
    style={{ backgroundColor: color, cursor: 'pointer' }}
    title={name}
  />
);

export default Marker;
