import { FETCH_WEATHER } from '../actions/index.js';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    // NOTE: You can't do state.push here! You should never manipulate the state, but instead
    // return a completely new version of the state
    // We could use .concat to return a new array
      // return state.concat([ action.payload.data ]);
      // or ES6 equivalent version (but with action.payload.data first in the new array not last):
      return [ action.payload.data, ...state ];
  }
  return state;
}