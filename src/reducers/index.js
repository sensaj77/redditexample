import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';

import redditReducers from './redditReducers.js';

export default combineReducers({
  routing: routeReducer,
  redditReducers: redditReducers
});
