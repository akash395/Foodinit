import React from 'react'
import Ratings from './Ratings'

function FoodProfile(props) {
    const imgStyle = {
        position: 'relative',
        left: '170px',
        
    }
    const btnStyle = {
        position: 'sticky',
        left: '170px'
    }
    return (
        <div>
            <img 
                src = {props.imgUrl} 
                style = {imgStyle}
            />
            <p style = {imgStyle}> {props.name}  {props.price}</p>
            <Ratings  style = {{marginLeft: '170px'}}/>
            <button  >Add to cart</button>
        </div>
    )
}

export default FoodProfile
