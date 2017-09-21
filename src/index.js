import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyB19JCXCXqGs8xsMY0jeslR5ldQY-fvi08'

// Make a component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Generate HTML, put it in the DOM so it shows
ReactDOM.render(<App />, document.querySelector('.container'));