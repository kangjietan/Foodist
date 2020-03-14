/* eslint-disable import/extensions */
import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import Gallery from './Gallery.jsx';
import RestaurantsList from './RestaurantsList.jsx';
import RandomRestaurant from './RandomRestaurant.jsx';
import data from '../../../data.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      dishes: [],
      randomList: [],
      randomRestaurant: {},
      searchLocation: 'San Francisco',
      displayLocation: '',
      showRestaurants: false,
      loading: false,
      showRandom: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.goBackHome = this.goBackHome.bind(this);
    this.goRandomPage = this.goRandomPage.bind(this);
  }

  componentDidMount() {
    // Should be api call that retrieves data from database
    // axios.get('http://localhost:3000/dishes')
    //   .then((response) => {
    //     this.setState({ dishes: response.data });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    this.setState({ dishes: data.dishes });
  }

  // Search the yelp api with the given parameters
  handleSearch(params) {
    // Render empty gallery when retrieving data from api call
    this.setState({ loading: true }, () => { setTimeout(() => { this.setState({ loading: false }); }, 2000); });
    // Params for api call, set location equal to location in search bar
    const query = params;
    const { searchLocation } = this.state;
    const location = params.location === undefined ? searchLocation : params.location;
    query.location = location;

    axios.get('http://localhost:3000/yelp/search', {
      params: query,
    })
      .then((response) => {
        console.log(response);
        this.setState({
          list: response.data.businesses,
          showRestaurants: true,
          loading: false,
          displayLocation: searchLocation,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Update location from search component
  updateLocation(location) {
    this.setState({ searchLocation: location });
  }

  // go back to dishes
  goBackHome() {
    this.setState({ showRestaurants: false, showRandom: false, list: [] });
  }

  // Choose random restaurant
  goRandomPage() {
    const { searchLocation } = this.state;
    const params = { location: searchLocation };

    axios.get('http://localhost:3000/yelp/search', {
      params,
    })
      .then((response) => {
        const restaurants = response.data.businesses;
        this.setState({ showRandom: true, randomList: restaurants, randomRestaurant: restaurants[0], list: [] });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {
      list,
      showRestaurants,
      loading,
      displayLocation,
      dishes,
      showRandom,
      randomList,
      randomRestaurant,
    } = this.state;

    let gallery = showRestaurants ? <RestaurantsList list={list} /> : <Gallery list={dishes} search={this.handleSearch} />;

    if (loading) {
      gallery = null;
    }

    if (showRandom) {
      gallery = <RandomRestaurant list={randomList} restaurant={randomRestaurant} />;
    }

    return (
      <div>
        <Search updateLoc={this.updateLocation} search={this.handleSearch} home={this.goBackHome} random={this.goRandomPage} />
        {showRestaurants ? <h2 style={{ marginLeft: '20px' }}>{displayLocation}</h2> : null}
        {gallery}
        <div>More coming soon!</div>
      </div>
    );
  }
}

export default App;
