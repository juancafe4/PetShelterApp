import React from 'react';
import { render } from 'react-dom';

import App from './components/App'
import MainMenu from './components/MainMenu'

import { Router, Route, browserHistory } from 'react-router'

render(
  (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/mainMenu" component={MainMenu}/>
  </Router>
),
  document.getElementById('root')
);
