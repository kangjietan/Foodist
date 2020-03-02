import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dish from './Dish.jsx';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.searchImage = this.searchImage.bind(this);
  }

  searchImage(event) {
    console.log(event);
    const food = event.target.alt;
    const { search } = this.props;

    // search({ term: food, location: 'San Francisco ' });
  }

  render() {
    const { list, search } = this.props;

    return (
      <div className="gallery-container container" role="list">
        {list.map((entry, i) => <Dish entry={entry} key={i} search={search} />)}
      </div>
    );
  }
}

Gallery.propTypes = {
  list: PropTypes.array.isRequired,
  search: PropTypes.func.isRequired,
};

export default Gallery;
