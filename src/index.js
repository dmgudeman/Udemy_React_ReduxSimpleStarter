import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDugtxUyFSHAvHMoY5OPsrX7MIwcEQZeMA';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({ videos });
      console.log(videos);
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        Hi there
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));