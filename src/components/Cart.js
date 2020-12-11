import React, { Component } from 'react'

import '../cart.css';



let carts = document.querySelectorAll('.add-cart');
let products =[{
    name: 'Lobster Soup',
    tag: 'Lobster_soup',
    price: 29.75,
    inCart: 0
},
{
    name: 'Thai Soup',
    tag: 'Thai_soup',
    price: 7.50,
    inCart: 0
},
{
    name: 'Beef Steak',
    tag: 'Beef_steak',
    price: 28.50,
    inCart: 0
},
{
    name: 'Salmon Fillet',
    tag: 'Salmon_fillet',
    price: 29.75,
    inCart: 0
}
]

for (let i = 0; i< carts.length; i++){
    carts[i].addEventListener('click',() => {
        cartNumbers(); 
    })
}


/* saves even if pg refreshed*/
function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers +1);
        /*document.querySelector('.cart span').textContent = productNumbers +1;*/
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        /*document.querySelector('.cart span').textContent = 1;*/

    }
    
    /*console.log(typeof productNumbers);
    localStorage.setItem('cartNumbers',)*/

}

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
             <button type="Order" className="ORDERBtn">Order</button>
             <button type="PickUp" className="PickUpBtn">Pick Up</button>
            <center>
                <h2>Cart is currently empty</h2>
                <h4>Items: {this.state.bag}</h4>
                </center>
            </div>
        )
    }
}

export default Cart
