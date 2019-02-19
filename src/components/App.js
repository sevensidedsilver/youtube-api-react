import React from 'react';

import SearchBar from './SearchBar'
import API from '../api/youtube'

class App extends React.Component {

  performSearch = (query) => {
    API.get('/search', {
      params: {
        q: query
      }
    })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.performSearch}/>
      </div>
    )
  }
}

export default App;
