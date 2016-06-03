import React                        from 'react';
import { Route, IndexRoute }        from 'react-router';

/* wrappers */
import CoreLayout                   from 'layouts/CoreLayout';
import MainView                  	from 'views/MainView';
import AsyncApp 					from 'containers/AsyncApp.js';

export default (
  <Route component={CoreLayout} path='/'>
    <IndexRoute component={AsyncApp} name='home' />
    <Route component={MainView}  path='/articles' name='articles' />
  </Route>
);
