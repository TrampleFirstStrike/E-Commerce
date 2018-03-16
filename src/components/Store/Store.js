import React, { Component } from "react";
import "./Store.css";
import axios from "axios";

class Store extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      products: []
    };
  }

  handleClick(id) {
    axios.post("/api/addToCart", { id });
  }
  addToMyWishlist(id) {
    console.log("id", id);
    axios.post("/api/addToWishlist", { id }).then(response => console.log(response));
  }

  componentDidMount() {
    axios.get("/api/products").then(response => {
      console.log(response, "this is the response log");
      this.setState({
        products: response.data
      });
    });
  }

  render() {
    let productToDisplay = this.state.products.map((element, index) => {
      return (
        <div className="image-wrapper" key={index}>
          <figure>
            <img className="image-product" src={element.image_url} />
            <h1 className="product-price">${element.price}.00</h1>
          </figure>
          <button
            onClick={() => this.handleClick(this.state.products[index].id)}
            className="cart-button">
            Add to Cart
          </button>
          <button
            onClick={() => this.addToMyWishlist(this.state.products[index].id)}
            className="wishlist-button">
            Add to Wishlist
          </button>
        </div>
      );
    });
    return (
      <div className="wrapper">
        <div className="section-2">{productToDisplay}</div>
      </div>
    );
  }
}
export default Store;
