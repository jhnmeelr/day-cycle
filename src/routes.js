import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import WeekContainer from './containers/WeekContainer'; // eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={WeekContainer}/>
    <Route path="*" component={WeekContainer}/>
  </Route>
);
