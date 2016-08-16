import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import SearchPage from './containers/SearchPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={SearchPage} />
    <Route path="/watch" component={HomePage} />
  </Route>
);
