import React from 'react'

function FoodProfile(props) {
    const style = {
        position: 'relative',
        left: '170px',
        
    }
    return (
        <div>
            <img src = {props.imgUrl} style = {style}/>
        </div>
    )
}

export default FoodProfile
