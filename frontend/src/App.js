import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router >
      <Fragment>
      <NavBar/>
        Welcome!
      </Fragment>
      </Router >
    );
  }
}

export default App;
