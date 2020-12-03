import React from 'react'
import FoodProfile from './FoodProfile'
import Green_icedtea from './../images/Green_icedtea.jpg'
import Lemonade from './../images/Lemonade.jpg'
import Mango_lassi from './../images/Mango_lassi.jpg'
import Matcha_latte from './../images/Matcha_latte.jpg'
import Orange_juice from './../images/Orange_juice.jpg'
import Pina_colada from './../images/Pina_colada.jpg'
import Pineapple_lassi from './../images/Pineapple_lassi.jpg'
import Strawberry_shake from './../images/Strawberry_shake.jpg'
import Thai_icedtea from './../images/Thai_icedtea.jpg'

function Beverages() {
    return (
        <div>
             
            <div className="row">
        <div className=".col-4">
            <FoodProfile 
                imgUrl = {Green_icedtea} 
                name = "Green Icedtea"
                price = "$7.75"
            />
            <br />
            <br />
            
            <FoodProfile 
                imgUrl = {Lemonade}
                name = " Lemonade"
                price = "$4.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Mango_lassi}
                name = " Mango Lassi"
                price = "$9.75"
            />


        </div>
        <div className=".col-4">
            <br></br>
            
        <FoodProfile 
                imgUrl = {Matcha_latte}
                name = "Matcha Latte"
                price = "$9.99"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Orange_juice}
                name = "Orange Juice"
                price = "$3.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Pina_colada}
                name = "Pina Colada"
                price = "$9.75"
            />

        </div>
        <div className=".col-4">
            <br></br>
        <FoodProfile 
                imgUrl = {Pineapple_lassi}
                name = "Pineapple Lassi"
                price = "$9.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Strawberry_shake}
                name = " Strawberry Shake"
                price = "$9.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Thai_icedtea}
                name = "Thai Icedtea"
                price = "$7.75"
            />

        </div>
        </div>
        </div>
    )
}

export default Beverages
