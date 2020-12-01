import React from 'react'
import  chicken_wings from './../images/chicken-wings.jfif'
import FoodProfile from './FoodProfile'

function Appetizer() {
    return (
        <div>
            <h2 style = {{marginLeft: '170px'}}>This is Appetizer menu</h2>
            <FoodProfile imgUrl = {chicken_wings} />

        </div>
    )
}

export default Appetizer
