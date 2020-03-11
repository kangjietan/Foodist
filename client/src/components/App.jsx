/* eslint-disable import/extensions */
import React, { Component } from 'react';
import searchYelp from '../../../api/searchYelp.js';
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

    // axios.get('http://localhost:3000/yelp/search', {
    //   params: query,
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    searchYelp(query)
      .then((response) => {
        this.setState({
          list: response.data.businesses,
          showRestaurants: true,
          loading: false,
          displayLocation: searchLocation,
        });
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
    this.setState({ showRestaurants: false, showRandom: false, list: [] });
  }

  goRandomPage() {
    this.setState({ showRandom: true, list: [] });
  }

  render() {
    const {
      list,
      showRestaurants,
      loading,
      displayLocation,
      dishes,
      showRandom,
    } = this.state;

    const {
      updateLocation,
      handleSearch,
      goBackHome,
      goRandomPage,
    } = this;

    const gallery = showRestaurants
      ? <RestaurantsList list={list} /> : <Gallery list={dishes} search={handleSearch} />;

    if (loading) {
      return (
        <div>
          <Search updateLoc={updateLocation} search={this.handleSearch} home={goBackHome} random={goRandomPage} />
        </div>
      );
    }

    if (showRandom) {
      return (
        <div>
          <Search updateLoc={updateLocation} search={this.handleSearch} home={goBackHome} random={goRandomPage} />
          <RandomRestaurant />
        </div>
      );
    }

    return (
      <div>
        <Search updateLoc={updateLocation} search={this.handleSearch} home={this.goBackHome} random={goRandomPage} />
        {showRestaurants ? <h2 style={{ marginLeft: '20px' }}>{displayLocation}</h2> : null}
        {gallery}
        <div>More coming soon!</div>
      </div>
    );
  }
}

export default App;
