import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import ManagerLoginForm from './components/ManagerLoginForm';
import NavBar from'./components/NavBar'
import Home from './components/Home'
import About from'./components/About'
import Menu from'./components/Menu'
import ContactUs from'./components/ContactUs'
import SignUp from'./components/SignUp'
import SignIn from'./components/SignIn'
import Cart from'./components/Cart'
import { ManagerPage } from './components/ManagerPage';



ReactDOM.render (
  <div>
    <Router>
        <NavBar />

        <Switch>
        <Route path = '/home' component = {Home} /> 
        </Switch>

        <Switch>
        <Route path = '/menu' component = {Menu} />
        </Switch>

        <Switch>
        <Route path = '/about' component = {About} />
        </Switch>

        <Switch>
        <Route path = '/signin' component = {SignIn} />
        </Switch>

        <Switch>
        <Route path = '/signup' component = {SignUp} />
        </Switch>

        <Switch>
        <Route path = '/contact' component = {ContactUs} />
        </Switch>

        <Switch>
        <Route path = '/cart' component = {Cart} />
        </Switch>

        <Switch>
          <Route path = '/admin' component = {ManagerLoginForm}/>
        </Switch>

        <Switch>
          <Route path = '/records' component = {ManagerPage} />
        </Switch>
    </Router>
  </div>,

  document.getElementById ("root")
)