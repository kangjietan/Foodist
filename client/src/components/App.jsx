import React, { Component } from 'react';
import searchYelp from '../../../api/searchYelp.js';
import Search from './Search.jsx';
import Gallery from './Gallery.jsx';
import data from '../../../data.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  // componentDidMount() {
  //   searchYelp('rice', 'San Francisco')
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({ list: response.data.businesses });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  render() {
    console.log(data.dishes);
    return (
      <div>
        <Search />
        <Gallery list={data.dishes} />
      </div>
    );
  }
}

export default App;
