import React, { Component } from 'react';
import axios from 'axios';
import './Store.css';

class Store extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            products: []
        }
    }

    handleClick (product) {
        axios.post('/api/')

    }



    componentDidMount() {
        axios.get("/api/products")
        .then((response) => {
            console.log(response, 'this is the response log');
            this.setState({
                products: response.data
            })
        })
    }

    render() {
        let productToDisplay = this.state.products.map((element, index) => {
            return (<div><img src={element.image_url}/>
                <button onClick={() => this.handleClick(this.state.products[index])}className="cart-button">Add to Shopping Cart</button>
            </div>)
        })
            return (
                     
                     <div className="section-1">
                         {productToDisplay}
                     <div className="content">
                         <h2 className="hero-text">Store</h2>
                         <p className="hero-sub-text"></p>
                         <a href="" className="btn"></a>
                     </div>
                     </div>
            )
        }
    }
export default Store;