import React, { Component } from 'react';
import axios from 'axios';
import './Store.css';

class Store extends Component {
    constructor() {
        super();

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get("https://www.giantbomb.com/api/games/")
        .then((response) => {
            this.setState({
                products: response.data
            })
        })
    }

    render() {
        let productToDisplay = this.state.products.map((element, index) => {
            return (
                <div className="product-container" key={index}>
                    <h2>{element.title}</h2>
                    <img src={element.image} alt="" />
                    <h2>{element.desc}</h2>
                    <h3>{"$" + element.price + ".00"}</h3>
                    <button onClick={() =>this.props.addToShoppingCart(element)}>Buy</button>
                </div>
            )
        })
        return (
            <div className="store-container">
                {productToDisplay}
            </div>

        )
    }
}

export default Store;