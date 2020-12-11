import React, { Component } from 'react'
import FoodProfile from './FoodProfile';

export class Cart extends Component {
    constructor (props){
        super (props);
        this.state = {
            bag: 0,
            items: []
        }
    }
    addToCart (){
        this.setState ((prevState) => {
            return {
                bag: prevState.bag + 1
            }
        })
    }
    render() {
        return (
            <div>
                <h4>This is to add items to cart</h4>
                <h4>Items: {this.state.bag}</h4>
                
            </div>
        )
    }
}

export default Cart
