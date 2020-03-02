/* eslint-disable import/extensions */
import React, { Component } from 'react';
import searchYelp from '../../../api/searchYelp.js';
import Search from './Search.jsx';
import Gallery from './Gallery.jsx';
import RestaurantsList from './RestaurantsList.jsx';
import data from '../../../data.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      showRestaurants: false,
      searchLocation: 'San Francisco',
      loading: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.goBackHome = this.goBackHome.bind(this);
  }

  // componentDidMount() {
  //   this.handleSearch({ term: 'rice', location: 'San Francisco' });
  // }

  // Search the yelp api with the given parameters
  handleSearch(params) {
    this.setState({ loading: true });
    const query = params;
    const { searchLocation } = this.state;
    const location = params.location === undefined ? searchLocation : params.location;
    query.location = location;
    searchYelp(query)
      .then((response) => {
        console.log(response);
        this.setState({ list: response.data.businesses, showRestaurants: true, loading: false });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // Update location from search component
  updateLocation(location) {
    this.setState({ searchLocation: location });
  }

  // go back to dishes
  goBackHome() {
    this.setState({ showRestaurants: false, list: [] });
  }

  render() {
    const { list, showRestaurants, loading } = this.state;
    const gallery = showRestaurants
      ? <RestaurantsList list={list} /> : <Gallery list={data.dishes} search={this.handleSearch} />;

    if (loading) {
      return (
        <div>
          <Search update={this.updateLocation} search={this.handleSearch} home={this.goBackHome} />
          {/* <img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/source.gif" alt="loading" className="loading-gif" /> */}
        </div>
      );
    }

    return (
      <div>
        <Search update={this.updateLocation} search={this.handleSearch} home={this.goBackHome} />
        {gallery}
      </div>
    );
  }
}

export default App;
