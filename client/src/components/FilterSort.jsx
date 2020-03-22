import React from 'react';
import PropTypes from 'prop-types';

const FilterSort = ({ displayLocation, filterSort }) => (
  <div className="filter-sort-box">
    <h2 style={{ marginLeft: '20px' }}>{displayLocation}</h2>
    <div className="filter-box">
      Filter By
      <select name="filter" className="custom-select" defaultValue="DEFAULT" onChange={filterSort}>
        <option value="DEFAULT" style={{ fontWeight: '700' }}>No filter</option>
        <option value="rating" disabled>Rating</option>
        <option value="1" style={{ fontWeight: '700' }}>1 star</option>
        <option value="2" style={{ fontWeight: '700' }}>2 stars</option>
        <option value="3" style={{ fontWeight: '700' }}>3 stars</option>
        <option value="4" style={{ fontWeight: '700' }}>4 stars</option>
        <option value="5" style={{ fontWeight: '700' }}>5 stars</option>
        <option value="pricing" disabled>Pricing</option>
        <option value="$" style={{ fontWeight: '700' }}>$</option>
        <option value="$$" style={{ fontWeight: '700' }}>$$</option>
        <option value="$$$" style={{ fontWeight: '700' }}>$$$</option>
        <option value="$$$$" style={{ fontWeight: '700' }}>$$$$</option>
      </select>
    </div>
    <div className="sort-box">
      Sort By
      <select name="sort" className="custom-select" defaultValue="recommended" onChange={filterSort}>
        <option value="recommended">Recommended</option>
        <option value="rating">Rating</option>
        <option value="pricing">Pricing</option>
        <option value="reviews">Reviews</option>
      </select>
    </div>
  </div>
);

FilterSort.propTypes = {
  displayLocation: PropTypes.string.isRequired,
};

export default FilterSort;
