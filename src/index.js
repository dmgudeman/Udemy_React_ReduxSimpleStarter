import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

// const API_KEY = 'AIzaSyB19JCXCXqGs8xsMY0jeslR5ldQY-fvi08';
const API_KEY = 'AIzaSyDugtxUyFSHAvHMoY5OPsrX7MIwcEQZeMA';



// Make a component
const App = () => {

  YTSearch({key: API_KEY, term: 'surfboards'}, data => {
    console.log("IIIIIIIIII   MMMMMM ");
    console.log(data);
  });

  return (
    <div>
      <SearchBar />
      Hi there
    </div>
  );
}

// Generate HTML, put it in the DOM so it shows
ReactDOM.render(<App />, document.querySelector('.container'));