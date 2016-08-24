import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './Login'
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Login/>
      </div>        
    )
  }
}
