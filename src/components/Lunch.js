import React from 'react'
import FoodProfile from './FoodProfile'
import Beef_steak from './../images/Beef_steak.jpg'
import Chowmein_noodle from './../images/Chowmein_noodle.jpg'
import Lamb_chops from './../images/Lamb_chops.jpg'
import Pad_krapow from './../images/Pad_krapow.jpg'
import Padma_kua from './../images/Padma_kua.jpg'
import Salmon_fillet from './../images/Salmon_fillet.jpg'
import Schezuan_friedrice from './../images/Schezuan_friedrice.jpg'
import Shrimp_friedrice from './../images/Shrimp_friedrice.jpg'
import Smoke_salmon from './../images/Smoke_salmon.jpg'

function Lunch() {
    return (
        <div>
            <div className="row">
        <div className=".col-4">
            <FoodProfile 
                imgUrl = {Beef_steak} 
                name = "Beef Steak"
                price = "$28.50"
            />
            <br />
            <br />
            
            <FoodProfile 
                imgUrl = {Chowmein_noodle}
                name = " Chowmein Noodle"
                price = "$19.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Lamb_chops}
                name = " Lamb Chops"
                price = "$25.75"
            />


        </div>
        <div className=".col-4">
            <br></br>
            
        <FoodProfile 
                imgUrl = {Pad_krapow}
                name = "Pad Krapow"
                price = "$29.99"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Padma_kua}
                name = "Padma Kua"
                price = "$25.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Salmon_fillet}
                name = "Salmon_fillet"
                price = "$29.75"
            />

        </div>
        <div className=".col-4">
            <br></br>
        <FoodProfile 
                imgUrl = {Schezuan_friedrice}
                name = "Schezuan Fried rice"
                price = "$19.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Shrimp_friedrice}
                name = " Shrimp Fried rice"
                price = "$19.75"
            />
            <br />
            <br />
            <br />
            <FoodProfile 
                imgUrl = {Smoke_salmon}
                name = "Smoke Salmon"
                price = "$20.75"
            />

        </div>
        </div>
        </div>
    )
}

export default Lunch
