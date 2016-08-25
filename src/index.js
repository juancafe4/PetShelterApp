import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import MainMenu from './components/MainMenu';
import RecentlyAdopted from './components/RecentlyAdopted';

import { Router, Route, browserHistory } from 'react-router'
const css = require('./css/style.css');

render(
  (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/mainMenu" component={MainMenu}/>
    <Route path="/recently/:id" component={RecentlyAdopted}/>
  </Router>
),
  document.getElementById('root')
);
