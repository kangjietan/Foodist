/* eslint-disable import/extensions */
import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import Gallery from './Gallery.jsx';
import RestaurantsList from './RestaurantsList.jsx';
import RandomRestaurant from './RandomRestaurant.jsx';
import FilterSort from './FilterSort.jsx';
import Helpers from './helpers.jsx';
import data from '../../../data.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      originalList: [],
      list: [],
      sortedList: [],
      dishes: [],
      randomList: [],
      randomRestaurant: {},
      searchLocation: 'San Francisco',
      displayLocation: '',
      showRestaurants: false,
      loading: false,
      showRandom: false,
      url: 'http://localhost:3000',
      // url: 'https://foodist-mvp.herokuapp.com',
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.goBackHome = this.goBackHome.bind(this);
    this.goRandomPage = this.goRandomPage.bind(this);
    this.rollNewRestaurant = this.rollNewRestaurant.bind(this);
    this.handleFilterSort = this.handleFilterSort.bind(this);
    this.rollByUserLocation = this.rollByUserLocation.bind(this);
  }

  componentDidMount() {
    // Should be api call that retrieves data from database
    // axios.get(`${url}/dishes`)
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
    this.setState({ loading: true });
    // Params for api call, set location equal to location in search bar
    const query = params;
    const { searchLocation, url } = this.state;
    const location = params.location === undefined ? searchLocation : params.location;
    query.location = location;
    query.limit = 50;

    axios.get(`${url}/yelp/search`, {
      params: query,
    })
      .then((response) => {
        const { businesses } = response.data;
        this.setState({
          originalList: businesses,
          list: businesses,
          showRestaurants: true,
          showRandom: false,
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
    this.setState({ showRestaurants: false, showRandom: false, list: [], sortedList: [] });
  }

  // Choose random restaurant
  goRandomPage() {
    const { searchLocation, url } = this.state;
    const params = { location: searchLocation, term: 'food', limit: 50 };
    this.setState({ loading: true, sortedList: [] });

    axios.get(`${url}/yelp/search`, {
      params,
    })
      .then((response) => {
        const restaurants = response.data.businesses;
        const idx = Helpers.randomInt(0, restaurants.length - 1);
        this.setState({
          loading: false,
          showRestaurants: false,
          showRandom: true,
          randomList: restaurants,
          randomRestaurant: restaurants[idx],
          list: [],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Click button to roll a new restaurant
  rollNewRestaurant() {
    const { randomList } = this.state;
    const idx = Helpers.randomInt(0, randomList.length - 1);

    this.setState({ randomRestaurant: randomList[idx] });
  }

  handleFilterSort(event) {
    const { target } = event;
    const { name, value } = target;

    // Filtering
    if (name === 'filter') {
      const { originalList, sortedList } = this.state;
      let filteredList;

      // If list has been sorted, filter that list
      if (sortedList.length) {
        filteredList = sortedList.slice();
      } else {
        filteredList = originalList.slice();
      }

      // Check user input value
      if (value === 'DEFAULT') {
        this.setState({ list: filteredList });
      } else if (value.indexOf('$') >= 0) {
        filteredList = filteredList.filter((restaurant) => {
          const price = restaurant.price === undefined ? 0 : restaurant.price.length;
          return price === value.length;
        });
        this.setState({ list: filteredList });
      } else {
        const rating = Number(value);
        filteredList = filteredList.filter((restaurant) => restaurant.rating >= rating && restaurant.rating < (rating + 1));
        this.setState({ list: filteredList });
      }
    // Sorting
    } else if (name === 'sort') {
      const { list, originalList } = this.state;
      // Don't mutate original list
      let sortedList = list.slice();
      // User selected recommended so default list
      if (value === 'recommended') {
        this.setState({ list: originalList, sortedList: [] }, Helpers.changeFilterDefault);
      // User selected rating so sort by rating descending order
      } else if (value === 'rating') {
        sortedList = sortedList.sort((a, b) => b.rating - a.rating);
        this.setState({ list: sortedList, sortedList });
      // User selected rating so sort by rating ascending order
      } else if (value === 'pricing') {
        sortedList = sortedList.sort((a, b) => {
          const price1 = a.price === undefined ? 0 : a.price.length;
          const price2 = b.price === undefined ? 0 : b.price.length;
          return price1 - price2;
        });
        this.setState({ list: sortedList, sortedList });
      // User selected rating so sort by rating descending order
      } else if (value === 'reviews') {
        sortedList = sortedList.sort((a, b) => b.review_count - a.review_count);
        this.setState({ list: sortedList, sortedList });
      }
    }
  }

  // Need HTTPS to test
  rollByUserLocation() {
    const { searchLocation, url } = this.state;
    Helpers.getUserLocation()
      .then((coords) => {
        console.log(coords);
        const params = { latitude: coords[0], longitude: coords[1], location: searchLocation, term: 'food', limit: 50 };
        axios.get(`${url}/yelp/search/coordinates`, {
          params,
        })
          .then((response) => {
            const restaurants = response.data.businesses;
            const idx = Helpers.randomInt(0, restaurants.length - 1);
            this.setState({ loading: false, showRestaurants: false, showRandom: true, randomList: restaurants, randomRestaurant: restaurants[idx], list: [] });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
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
      gallery = <RandomRestaurant list={randomList} restaurant={randomRestaurant} roll={this.rollNewRestaurant} />;
    }

    return (
      <div>
        <Search updateLoc={this.updateLocation} search={this.handleSearch} home={this.goBackHome} random={this.goRandomPage} />
        {showRestaurants ? <FilterSort displayLocation={displayLocation} filterSort={this.handleFilterSort} /> : null}
        {showRandom ? <div className="container" style={{ textAlign: 'center' }}><button type="button" className="btn btn-primary" onClick={this.rollByUserLocation}>Search by your location</button></div> : null}
        {gallery}
      </div>
    );
  }
}

export default App;
