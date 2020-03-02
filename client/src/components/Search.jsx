import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      food: '',
      location: 'San Francisco',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name } = target;
    const { value } = target;

    this.setState({ [name]: value });
  }

  render() {
    const { food, location } = this.state;
    const { update } = this.props;

    return (
      <div className="search-container">
        <div className="container">
          <nav className="navbar navbar-light">
            <img src="food.svg" className="nav-icon" alt="Icon made by Vectors Market from www.flaticon.com" />
            <div className="navbar-brand">Foodist</div>
            <form className="form-row">
              <div className="col">
                <input type="text" className="form-control" name="food" placeholder="Food, Drinks, Restaurants, ...." value={food} onChange={this.handleChange} />
              </div>
              <div className="col">
                <input type="text" className="form-control" name="location" placeholder="Location...." value={location} onChange={(event) => { this.handleChange(event); update(location); }} />
              </div>
              <button className="btn btn-outline-secondary btn-search" type="button" aria-label="search" alt="Icon made by Those Icons from www.flaticon.com" />
            </form>
          </nav>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  update: PropTypes.func.isRequired,
};

export default Search;
