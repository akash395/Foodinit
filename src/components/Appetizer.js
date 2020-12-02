import React from 'react'
import FoodProfile from './FoodProfile'

import  Thai_soup from './../images/Thai_soup.jpg'
import fries from './../images/fries.png'
import Shrimp_roll from './../images/Shrimp_roll.png'
import Chicken_Lollipop from './../images/Chicken_Lollipop.jpg'
import Chicken_satay from './../images/Chicken_satay.jpg'
import Dumplings from './../images/Dumplings.jpg'
import Fish_finger from './../images/Fish_finger.jpg'
import Fish_cake from './../images/Fish_cake.jpg'
import Shrimp_tempura from './../images/Shrimp_tempura.jpg'



function Appetizer() {
    return (
        <div className="row">
        <div className=".col-4">
            <FoodProfile 
                imgUrl = {Thai_soup} 
                name = "Thai Soup"
                price = "$7.50"
            />
            <br />
            <br />
            
            <FoodProfile 
                imgUrl = {fries}
                name = "Fries"
                price = "$2.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Shrimp_roll}
                name = "Shrimp Roll"
                price = "$7.75"
            />


        </div>
        <div className=".col-4">
            <br></br>
            
        <FoodProfile 
                imgUrl = {Chicken_Lollipop}
                name = "Chicken Lollipop"
                price = "$9.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Chicken_satay}
                name = "Chicken Satay"
                price = "$8.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Dumplings}
                name = "Dumplings"
                price = "$6.75"
            />

        </div>
        <div className=".col-4">
            <br></br>
        <FoodProfile 
                imgUrl = {Fish_finger}
                name = "Fish Finger"
                price = "$8.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Fish_cake}
                name = "Fish Cake"
                price = "$7.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Shrimp_tempura}
                name = "Shrimp tempura"
                price = "$7.75"
            />

        </div>
        </div>
    )
}

export default Appetizer