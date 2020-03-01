import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      food: '',
      location: 'San Francisco'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value })
  }

  render() {
    const { food, location } = this.state;

    return(
      <div className="search-container">
        <div className="container">
          <nav className="navbar navbar-light">
            <img src="food.svg" className="search-icon" alt="Icon made by Vectors Market from www.flaticon.com"/>
            <a className="navbar-brand">Foodist</a>
            <form className="form-row">
              <div className="col">
                <input type="text" className="form-control" name="food" placeholder="Food...." value={food} onChange={this.handleChange} />
              </div>
              <div className="col">
                <input type="text" className="form-control" name="location" placeholder="Location...." value={location} onChange={this.handleChange} />
              </div>
              <button className="btn btn-outline-secondary btn-search" type="button">Search</button>
            </form>
          </nav>
        </div>
      </div>
    );
  }
}

export default Search;
