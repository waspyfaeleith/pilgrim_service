import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js'
import YellowTShirtListContainer from './containers/yellowTShirts/YellowTShirtListContainer'
import YellowTShirtFormContainer from './containers/yellowTShirts/YellowTShirtFormContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router >
      <Fragment>
      <NavBar/>
      <Switch>
        <Route exact path = '/yellowTShirts' component={YellowTShirtListContainer}/>
        <Route exact path = '/yellowTShirts/new' component={YellowTShirtFormContainer}/>
        </Switch>
      </Fragment>
      </Router >
    );
  }
}

export default App;
