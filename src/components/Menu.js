import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Sidebar from './Sidebar'

import './../App.css'
import './../Sidebar.css'
import '../cart.css'

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
        
        <body><script src ="Cart.js"></script></body>
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

                <div class = "Container">
                    <div class = "image">
                            <img src = {Salmon_fillet} alt="thsirt1" ></img>
                            <h3>Salmon Fillet</h3>
                            <h3>$29.75</h3>
                            <a class="add-cart cart1" href ="#">Add Cart</a>
                    </div>
                    <div class = "image">
                            <img src = {Beef_steak}  alt="thsirt1" ></img>
                            <h3>Beef Steak</h3>
                            <h3>$28.50</h3>
                            <a class= "add-cart cart2" href ="#">Add Cart</a>
                    </div>

                    <div class = "image">
                            <img src = {Thai_soup} alt="thsirt1" ></img>
                            <h3>Thai Soup</h3>
                            <h3>$7.50</h3>
                            <a class= "add-cart cart3" href ="#">Add Cart</a>
                    </div>
                
                    <div class = "image">
                            <img src = {Lobster_soup}  alt="thsirt1" ></img>
                            <h3>Lobster Soup</h3>
                            <h3>$29.75</h3>
                            <a class= "add-cart cart4" href ="#">Add Cart</a>
                    </div>

                </div>
                
            </Router> 
                

                      
        )
    }
}

export default Menu
