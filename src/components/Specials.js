import React from 'react'
import FoodProfile from './FoodProfile'
import Fish_salad from './../images/Fish_salad.jpg'
import Mixed_scrambled from './../images/Mixed_scrambled.jpg'
import Lamb_massaman  from './../images/Lamb_massaman.jpg'

function Specials() {
    return (
       <div>
           <div className="row">
            <div className=".col-4">
            <FoodProfile 
                imgUrl = {Fish_salad} 
                name = "Fish Salad"
                price = "$24.75"
            />
            </div>
             <div className=".col-4">
            <br></br>
           
        <FoodProfile 
                imgUrl = {Mixed_scrambled}
                name = "Mixed Scrambled"
                price = "$29.99"
            />
            </div>

            <div className=".col-4">
            <br></br>
        <FoodProfile 
                imgUrl = {Lamb_massaman}
                name = "Lamb Massaman"
                price = "$29.75"
            />
            </div>
            </div> 
            </div>
             
            
       
    )
}

export default Specials
