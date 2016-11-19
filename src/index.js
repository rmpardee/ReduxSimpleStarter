/* REACT: A JS library that produces HTML to show to the user in the browser

COMPONENT/VIEW (interchangable): collection of JS functions that produce HTML

JSX: HTML written in your JS

JS MODULES: access to different code than what's in your file

REACTDOM: What actually takes the component and adds it to the DOM

FUNCTIONAL COMPONENT: JS function that returns JSX
- do not have state

CLASS-BASED COMPONENT: 
- must have a render method

STATE: A JS object used to record and react to events
- Whenever the state object changes, the render function is re-run for class-based components
- Each component has it's own unique state object

CONTROL FIELD: A form element (like <input>) whose value is set by the state

DOWNWARDS DATA FLOW: Only the most parent component should be responsible for requesting data (from an API from the backend etc)

- if data changes over time, we want it stored in state
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import { API_KEY } from '../config.js';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';


// Create a new component that produces HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
      // ES6: this.setState({ videos: videos }); = this.setState({videos})
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
};

// Insert the component's generated HTML into the DOM
// NOTE: needs to be an instance of our class (written in JSX as an instance of our component), and where to render it
ReactDOM.render(<App />, document.querySelector('.container'));
