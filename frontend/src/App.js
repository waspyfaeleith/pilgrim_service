import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js'
import YellowTShirtListContainer from './containers/yellowTShirts/YellowTShirtListContainer'
import YellowTShirtFormContainer from './containers/yellowTShirts/YellowTShirtFormContainer'
import PilgrimListContainer from './containers/pilgrims/PilgrimListContainer'
import PilgrimFormContainer from './containers/pilgrims/PilgrimFormContainer'
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
              <Route exact path = '/pilgrims' component={PilgrimListContainer}/>
              <Route exact path = '/pilgrims/new' component={PilgrimFormContainer}/>
            </Switch>
          </Fragment>
      </Router >
    );
  }
}

export default App;
