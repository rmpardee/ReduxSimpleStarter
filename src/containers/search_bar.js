import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    // we need this so the context is preserved when calling onInputChange
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFormSubmit(event) {
    // the browser wants to submit the form and refresh the HTML on submit.
    event.preventDefault();
    // here we will go and fetch weather data
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}