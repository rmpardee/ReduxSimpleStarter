// User types input at the top, should update list on the right

import React, { Component } from 'react';
// ^ equivalent to: const Component = React.Component;

class SearchBar extends Component {
  // constructor run anytime a new instance is created
  constructor(props) {
    // calling the parent method
    super(props);
    // initialize the state object, with what properties we want
    // NOTE: you never write this.state = anywhere else but the constructor
    // (everywhere else you use this.setState and pass it a new object)
    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  // must have a render method
  render() {
    return (
      <div className="search-bar">
        <input
          // this sets the value whenever the search bar rerenders
          value = {this.state.term}
          // an event triggers this resetting of state and therefore rerendering
          // This makes it a control field - state controls the value
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

}

export default SearchBar;