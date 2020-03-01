import React, { Component } from 'react';
import searchYelp from '../../../api/searchYelp.js';
import Restaurant from './Restaurant.jsx';
import Search from './Search.jsx';

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
    return (
      <div>
        <Search />
        {this.state.list.map((entry) => <Restaurant entry={entry} />)}
      </div>
    );
  }
}

export default App;
