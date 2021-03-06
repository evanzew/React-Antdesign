import './index.css';
import 'babel-polyfill';
import React from 'react';
import RouteApp from './containers/RouteApp/RouteApp';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store/createStore';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={RouteApp} />
    </Router>
  </Provider>,
  document.getElementById('react-root')
);
