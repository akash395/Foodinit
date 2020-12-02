import React from 'react'
import FoodProfile from './FoodProfile'
import Bacon_wrap from './../images/Bacon_wrap.jpg'
import Bagel_cc from './../images/Bagel_cc.jpg'
import French_slam from './../images/French_slam.jpg'
import Ham_croissant from './../images/Ham_croissant.jpg'
import Muffin from './../images/Muffin.jpg'
import Pancake from './../images/Pancake.jpg'
import Sausage_burrito from './../images/Sausage_burrito.jpg'
import Veggie_omelet from './../images/Veggie_omelet.jpg'
import Waffle from './../images/Waffle.jpg'

function Breakfast() {
    return (
        <div>
            <div className="row">
        <div className=".col-4">
            <FoodProfile 
                imgUrl = {Bacon_wrap} 
                name = "Bacon Wrap"
                price = "$5.50"
            />
            <br />
            <br />
            
            <FoodProfile 
                imgUrl = {Bagel_cc}
                name = " Bagel Cream Cheese"
                price = "$3.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {French_slam}
                name = "French Slam"
                price = "$7.75"
            />


        </div>
        <div className=".col-4">
            <br></br>
            
        <FoodProfile 
                imgUrl = {Ham_croissant}
                name = "Ham Croissant"
                price = "$9.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Muffin}
                name = "Muffin"
                price = "$3.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Pancake}
                name = "Pancake"
                price = "$9.75"
            />

        </div>
        <div className=".col-4">
            <br></br>
        <FoodProfile 
                imgUrl = {Sausage_burrito}
                name = "Sausage Burrito"
                price = "$8.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Veggie_omelet}
                name = " Veggie Omelet"
                price = "$5.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Waffle}
                name = "Waffle"
                price = "$7.75"
            />

        </div>
        </div>
        </div>
    )
}

export default Breakfast
