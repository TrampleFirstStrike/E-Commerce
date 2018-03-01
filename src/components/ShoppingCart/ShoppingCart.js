import React, { Component } from 'react';
import './ShoppingCart.css';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shoppingCart: this.props.shoppingCart
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            shoppingCart: nextProps.shoppingCart
        })
    }

    render () {
        let shoppingCartDisplay = this.props.id;
            <div className="shopping-cart-product-container">
                
            </div>
        
        return (
            <div className="shopping-cart-container">
               <h1>Empty Cart</h1>
            </div>
        )
    }
}

export default ShoppingCart;
