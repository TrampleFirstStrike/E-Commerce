import React, { Component } from 'react';
import './ShoppingCart.css';
import axios from 'axios';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shoppingCart: []
        }
    }
    componentDidMount(){
        axios.get("/api/getCart").then(response => this.setState({shoppingCart: response.data})).catch(console.log)
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            shoppingCart: nextProps.shoppingCart
        })
    }

    render () {
        let productToDisplay = this.state.shoppingCart.length >  0 ? this.state.shoppingCart.map((product, index) => {
            return (<li className="product-container" key={index}><img src={product[0].image_url} alt=""/></li>)
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
<img src="{product.image_url}" alt=""/>