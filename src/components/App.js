import React from 'react';
import Axios from 'axios'

import SearchBar from './SearchBar'
import APIKEY from '../api/youtube'

class App extends React.Component {


  render() {
    return (
      <div className="ui container">
        <SearchBar/>
      </div>
    )
  }
}

export default App;
