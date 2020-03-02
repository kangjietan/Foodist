import React, { Component } from 'react';
import searchYelp from '../../../api/searchYelp.js';
import Search from './Search.jsx';
import Gallery from './Gallery.jsx';
import RestaurantsList from './RestaurantsList.jsx'
import data from '../../../data.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      showRestaurants: false,
      searchLocation: 'San Francisco',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
  }

  // componentDidMount() {
  //   this.handleSearch({ term: 'rice', location: 'San Francisco' });
  // }

  handleSearch(params) {
    const query = params;
    const { searchLocation } = this.state;
    const location = params.location ? undefined : searchLocation;
    query.location = location;
    searchYelp(query)
      .then((response) => {
        this.setState({ list: response.data.businesses, showRestaurants: true });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  updateLocation(location) {
    this.setState({ searchLocation: location });
  }

  render() {
    const { list, showRestaurants } = this.state;
    const gallery = showRestaurants
      ? <RestaurantsList list={list} /> : <Gallery list={data.dishes} search={this.handleSearch} />;
    return (
      <div>
        <Search update={this.updateLocation} />
        {gallery}
      </div>
    );
  }
}

export default App;
