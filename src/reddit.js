import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import Root from './containers/RedditRoot.js';

render(
  <Root />,
  document.getElementById('redditroot')
)