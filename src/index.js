import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavBar from'./components/NavBar'
import Home from './components/Home'

ReactDOM.render (
  <Router>
    <Route path = '/' component = {NavBar} />
    
    <Switch>
      <Route path = '/home' component = {Home} /> 
    </Switch>
  </Router>,
  document.getElementById ("root")
)