import React from 'react';
import ReactDOM from 'react-dom';

// Make a component

const App = function() {
  return <div>Hi!</div>
}

// Generate HTML, put it in the DOM so it shows
ReactDOM.render(<App />, document.querySelector('.container'));