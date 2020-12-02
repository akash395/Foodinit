import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Sidebar from './Sidebar'

import './../App.css'
import './../Sidebar.css'

import Appetizer from './Appetizer'
import Breakfast from './Breakfast'
import Lunch from './Lunch'
import Dinner from './Dinner'
import Beverages from './Beverages'
import Specials from './Specials'

class Menu extends Component {
    constructor (){
        super ();
    }

    render() {
        return (  
            <Router>
                <div className = "Menu" id = "outer-container">
                    <Sidebar pageWrapId = {'page-wrap'} outerContainerId={'outer-container'} />
                    <Switch>
                        <Route path = '/appetizer' component = {Appetizer} />
                    </Switch> 

                    <Switch>
                        <Route path = '/breakfast' component = {Breakfast} />
                    </Switch>

                    <Switch>
                        <Route path = '/lunch' component = {Lunch} />
                    </Switch>

                    <Switch>
                        <Route path = '/dinner' component = {Dinner} />
                    </Switch>

                    <Switch>
                        <Route path = '/beverages' component = {Beverages} />
                    </Switch>

                    <Switch>
                        <Route path = '/specials' component = {Specials} />
                    </Switch>
                </div>
            </Router>           
        )
    }
}

export default Menu
