import React, { useState, useEffect, useMemo } from 'react'
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
import {ProtectedRoute} from  './components/ProtectedRoute'
import { AuthContext } from './components/auth';

function Main(props) {
    const [token, setToken] = useState (null);
    const providerTokenValue = useMemo (() => (
        {token, setToken}
    ), [token, setToken])

    return (
        <AuthContext.Provider value = { providerTokenValue }>
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
                <Route exact path = '/cart' component = {Cart} />
                </Switch>

                <Switch>
                    <Route path = '/admin' component = {ManagerLoginForm}/>
                </Switch>

                <Switch>
                    <ProtectedRoute exact path = '/records' component = {ManagerPage} />
                </Switch>       

            </Router>
        </AuthContext.Provider>
    );
}

export default Main
