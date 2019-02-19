import React from 'react'

class SearchBar extends React.Component{
  state = {term:''}

  handleType = (e) => {
    this.setState({term: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    //perform search callback from parent here
  }

  render(){
    return(
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              onChange={this.handleType}
              value={this.state.term}
              type="text"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
