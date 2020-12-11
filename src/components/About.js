import React from 'react'
import {Link} from 'react-router-dom'
import Shrimp_tempura from './../images/Shrimp_tempura.jpg'
import Caeser_salad from './../images/Caeser_salad.jpg'

function About() {
    return (
        <div>
            <center><br/><br/>
            <h1>About Us</h1>
            <h2>FoodInIt was created to provide a greater quality in food that will satisfy consumers. <br/>
            Food can be delivered right to your doorstep or you can simply pick it up here. <br/>
            We strive to provide the utmost quality and hope that everyone is satisfied with our food! <br/>
            </h2>
            <br/>
            <br/>
            <img src = {Shrimp_tempura}></img>
            <img src = {Caeser_salad}></img>
            </center>
            
        </div>
    )
}


export default About
