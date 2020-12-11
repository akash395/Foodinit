import React from 'react'
import {Link} from 'react-router-dom'
import Shrimp_tempura from './../images/Shrimp_tempura.jpg'
import Caeser_salad from './../images/Caeser_salad.jpg'
import ONLINE_FOOD from './../images/ONLINE_FOOD.jpg'

function About() {
    return (
        <div>
            <center><br/><br/>
            <h3 className="H3class">About Us</h3>
            <h2>Welcome to FoodInIt. FoodInIt was created to provide a greater quality in food that will satisfy consumers. <br/>
            Food can be delivered right to your doorstep or you can simply pick it up here. <br/>
            We strive to provide the utmost quality and hope that everyone is satisfied with our food! <br/>
            </h2>
            <br/>
            <br/>
            <img src = {Shrimp_tempura}></img>
            <img src = {Caeser_salad}></img>
            </center>
            <br/>
            <div className = "container" id = "section-2-gradient">

             <h2 className="large">Business Hours:</h2>
                <h3>Mon - Fri:	7:00 AM - 11:00 PM <br/>
                    Sat & Sun:	6:00 AM - 11:00 PM <br/>
                </h3>
            </div>
        </div>
    )
}


export default About
