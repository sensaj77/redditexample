import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';

import formDataReducer from './formData';
import redditReducers from './redditReducers.js';

export default combineReducers({
  routing: routeReducer,
  formDataReducer: formDataReducer,
  redditReducers: redditReducers
});
