import React from 'react'
import FoodProfile from './FoodProfile'
import Brussels_sprout from './../images/Brussels_sprout.jpg'
import Caeser_salad from './../images/Caeser_salad.jpg'
import Calamari from './../images/Calamari.jpg'
import Cauliflower_steak from './../images/Cauliflower_steak.jpg'
import Fettuccine_clams from './../images/Fettuccine_clams.jpg'
import Lobster_soup from './../images/Lobster_soup.jpg'
import Truffle_gnocchi from './../images/Truffle_gnocchi.jpg'
import Veal_meatball from './../images/Veal_meatball.png'
import Yellowfin_tuna from './../images/Yellowfin_tuna.jpg'

function Dinner() {
    return (
        <div>
          
            <div className="row">
        <div className=".col-4">
            <FoodProfile 
                imgUrl = {Brussels_sprout} 
                name = "Brussels Sprout"
                price = "$18.50"
            />
            <br />
            <br />
            
            <FoodProfile 
                imgUrl = {Caeser_salad}
                name = " Caeser Salad"
                price = "$19.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Calamari}
                name = " Calamari"
                price = "$19.75"
            />


        </div>
        <div className=".col-4">
            <br></br>
            
        <FoodProfile 
                imgUrl = {Cauliflower_steak}
                name = "Cauliflower Steak"
                price = "$19.99"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Fettuccine_clams}
                name = "Fettuccine Clams"
                price = "$25.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Lobster_soup}
                name = "Lobster Soup"
                price = "$29.75"
            />

        </div>
        <div className=".col-4">
            <br></br>
        <FoodProfile 
                imgUrl = {Truffle_gnocchi}
                name = "Truffle Gnocchi"
                price = "$19.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Veal_meatball}
                name = " Veal Meatball"
                price = "$19.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Yellowfin_tuna}
                name = "Yellowfin Tuna"
                price = "$20.75"
            />

        </div>
        </div>
        </div>
    )
}

export default Dinner
