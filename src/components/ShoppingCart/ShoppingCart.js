import React, { Component } from "react";
import "./ShoppingCart.css";
import axios from "axios";
import Checkout from '../Checkout/Checkout';
import stripe from "../../constants/stripe";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingCart: [],
      total: 0,
      grandTotal: 0
    };
    this.getCartTotal = this.getCartTotal.bind(this);
    this.getSalesTax = this.getSalesTax.bind(this);
    this.removeFromShoppingCart = this.removeFromShoppingCart.bind(this);
  }
  componentDidMount() {
    axios
    .get("/api/getCart")
    .then(response => { 
      this.setState({ shoppingCart: response.data })
      console.log(response.data)
      this.getCartTotal(response.data);
      this.getSalesTax(this.state.total);

    })
    .catch(console.log);
    
    
  }
   getCartTotal (shoppingCart) { console.log(shoppingCart)
    let total = 0;
    for(let i=0; i<shoppingCart.length; i++) {
      console.log(shoppingCart[i].price)
      total += parseInt(shoppingCart[i].price)
    } 
    this.setState({total});
  }
    getSalesTax (total) {
    let salesTax= total * 1.0625
    let grandTotal = salesTax + total;
    this.setState({grandTotal});
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      shoppingCart: nextProps.shoppingCart
    });
  }

  removeFromShoppingCart(id) {
    let newCart = this.state.shoppingCart.filter((el, index) => {
      return index !== id;
    });

    this.setState({
      shoppingCart: newCart
    });
  }

    
  render() {
    console.log (this.state.total, this.state.grandTotal)
    let productToDisplay =
      this.state.shoppingCart.length > 0
        ? this.state.shoppingCart.map((product, index) => {
            return (
              <div className="product-container" key={index}>
                <figure>
                   <img
                    className="cart-product"
                    src={product.image_url} 
                    alt=""
                  /> 
                </figure>
                <button
                  className="shopping-cart-button"
                  onClick={() => this.removeFromShoppingCart(index)}
                >
                  Remove From Shopping Cart
                </button>
                <h1>${product.price}.00</h1>
              </div>
            );
          })
        : "No Items to Display";

    return (
      <div className="section-1">
        <div className="shopping-cart-container">
          <ul>
            {productToDisplay.length > 0
              ? productToDisplay
              : "No Items in Cart"}
          </ul>
        </div>
        ${this.state.grandTotal}
        <Checkout
            name={'The Road to learn React'}
            description={'Only the Book'}
            amount={this.state.grandTotal}
           />
           <stripe
              name={"Games"}
              description={"Your Order"}
              amount={10}
              />
      </div>
    );
  }
}

export default ShoppingCart;
