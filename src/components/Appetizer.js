import React from 'react'
import FoodProfile from './FoodProfile'
import  chicken_wings from './../images/chicken-wings.jfif'
import fries from './../images/fries.png'

function Appetizer() {
    return (
        <div>
            <FoodProfile 
                imgUrl = {chicken_wings} 
                name = "Chicken Wings"
                price = "$5.50"
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {fries}
                name = "Fries"
                price = "$2.75"
            />

        </div>
    )
}

export default Appetizer
