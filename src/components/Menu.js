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
import Caeser_salad from './../images/Caeser_salad.jpg'
import Beef_steak from './../images/Beef_steak.jpg'
import Thai_soup from './../images/Thai_soup.jpg'
import Lobster_soup from './../images/Lobster_soup.jpg'
import Salmon_fillet from './../images/Salmon_fillet.jpg'
import FoodProfile from './FoodProfile'


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

                <div>
                <center><br/><br/>
                <h3 className="H3class">TOP PICKS</h3>
                <h1>Our most loved dishes from FoodInIt are <br/>
                </h1>
                <br/>
                <br/>
                </center>
                </div>

                <div>
                    <div className="row">
                        <div className=".col-4">
                            <FoodProfile 
                            imgUrl = {Beef_steak} 
                            name = "Beef Steak"
                            price = "$28.50"
                            />
                            <br/>
                            <br/>
                        </div>

                            <div className=".col-4">
                                <FoodProfile 
                                imgUrl = {Salmon_fillet}
                                name = "Salmon_fillet"
                                price = "$29.75"
                                />
                                <br/>
                                <br/>
                            </div>
                    </div>      
                </div>


                <div>
                    <div className="row">
                        <div className=".col-4">
                            <FoodProfile 
                            imgUrl = {Thai_soup} 
                            name = "Thai Soup"
                            price = "$28.50"
                            />
                            <br/>
                            <br/>
                        </div>

                            <div className=".col-4">
                                <FoodProfile 
                                imgUrl = {Lobster_soup}
                                name = "Lobster Soup"
                                price = "$29.75"
                                />
                                <br/>
                                <br/>
                            </div>
                    </div>      
                </div>
                

            </Router>           
        )
    }
}

export default Menu
