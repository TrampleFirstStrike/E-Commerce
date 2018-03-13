import React, { Component } from 'react';
import './ShoppingCart.css';
import axios from 'axios';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shoppingCart: []
        }
        this.removeFromShoppingCart = this.removeFromShoppingCart.bind(this);
    }
    componentDidMount(){
        axios.get("/api/getCart").then(response => this.setState({shoppingCart: response.data})).catch(console.log)
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            shoppingCart: nextProps.shoppingCart
        })
    }

    removeFromShoppingCart(id) {
        let newCart = this.state.shoppingCart.filter((el, index) => {
            return index !== id 
    })
    
    this.setState({
        shoppingCart: newCart
    })
}



    render () {
        let productToDisplay = this.state.shoppingCart.length >  0 ? this.state.shoppingCart.map((product, index) => {
            return (<div className="product-container" key={index}><figure><img className="cart-product"src={product[0].image_url} alt=""/></figure>
            <button className="shopping-cart-button" onClick={() => this.removeFromShoppingCart(index)}>Remove From Shopping Cart</button>
            </div>)
        }): "No Items to Display"
         
         return (
            <div className="section-1"> 
                <div className="shopping-cart-container">
                <ul>
                    {productToDisplay.length > 0 ? productToDisplay : "No Items in Cart"}
                </ul>
                </div>
                <button onClick={()=>console.log(this.state.shoppingCart)}>Test for state</button>
            </div>
        )
    }
}

export default ShoppingCart;
