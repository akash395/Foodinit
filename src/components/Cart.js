import React, { Component } from 'react'

export class Cart extends Component {
    constructor (){
        super ();
        this.state = {
            bag: 0
        }
    }
    render() {
        return (
            <div>
                <h4>This is to add items to cart</h4>
            </div>
        )
    }
}

export default Cart
