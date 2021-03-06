import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: 'San Francisco',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name } = target;
    const { value } = target;
    const { updateLoc } = this.props;

    this.setState({ [name]: value }, () => {
      const { location } = this.state;
      updateLoc(location);
    });
  }

  render() {
    const { term, location } = this.state;
    const { search, home, random } = this.props;

    return (
      <div className="search-container">
        <div className="container">
          <nav className="navbar navbar-light">
            <div className="navbar-brand">
              <div className="logo-box" onClick={home} role="presentation">
                <img src="food.svg" className="nav-icon" alt="Icon made by Vectors Market from www.flaticon.com" />
                <span>Foodist</span>
              </div>
            </div>
            <form className="form-row">
              <div className="col">
                <input type="text" className="form-control" name="term" placeholder="Food, Drinks, Restaurants, ...." value={term} onChange={this.handleChange} />
              </div>
              <div className="col">
                <input type="text" className="form-control" name="location" placeholder="Location...." value={location} onChange={(event) => { this.handleChange(event); }} />
              </div>
              <button className="btn btn-outline-secondary btn-search" type="button" aria-label="search" alt="Icon made by Those Icons from www.flaticon.com" onClick={() => { search(this.state); }} />
            </form>
            <div className="random-box" onClick={random} role="presentation">
              <span className="random-title">Not Sure Where To Eat?</span>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  updateLoc: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  home: PropTypes.func.isRequired,
  random: PropTypes.func.isRequired,
};

export default Search;
