/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Dish from './Dish.jsx';

const Gallery = ({ list, search }) => (
  <div className="gallery-container container" role="list">
    {list.map((entry, i) => <Dish entry={entry} key={i} search={search} />)}
  </div>
);

Gallery.propTypes = {
  list: PropTypes.arrayOf(PropTypes.oneOf([PropTypes.object])).isRequired,
  search: PropTypes.func.isRequired,
};

export default Gallery;
