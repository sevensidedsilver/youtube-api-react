import React from 'react';

import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import Lamp from './Lamp'

import API from '../api/youtube'

class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null
  };

  performSearch = async (query) => {
    const response = await API.get('/search', {
      params: {
        q: query
      }
    })

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = (video) => {

    this.setState({selectedVideo: video})
  }

  componentDidMount() {
    this.performSearch('cat')
  }

  render() {
    const marginBottom = {

    }
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.performSearch}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column"  style={marginBottom}>
              <VideoDetail video={this.state.selectedVideo}/>
              <Lamp />
            </div>

            <div className="five wide column">
              <VideoList onVideoSelect = {this.onVideoSelect} videos={this.state.videos}/>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default App;
