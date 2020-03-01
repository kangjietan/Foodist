import React, { Component } from 'react';
import Dish from './Dish.jsx';

class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gallery-container container">
        {this.props.list.map((entry) => <Dish entry={entry} key={entry.id}/>)}
      </div>
    );
  }
}

export default Gallery;
