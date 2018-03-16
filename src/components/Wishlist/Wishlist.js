import React, { Component } from 'react';
import "./Wishlist.css";
import axios from 'axios';

class Wishlist extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            wishlist: []
        };
    }

    handleClick(id) {
        axios.post("/api/addToWishlist", { id });
    }

    componentDidMount() {
        console.log("HIT")
        axios.get("/api/getUserWishlist").then(response => {
            this.setState({wishlist: response.data})
        }).catch(console.log)
    }
    render() {
        let wishlistToDisplay = this.state.wishlist.map((element, index) => {
            return (
                <div>
                    <figure>
                        <img src={element.image_url}/>
                        <h1 className="product-price">${element.price}.00</h1>
                    </figure>
                </div>
            )
        })
        return (
            <div>
                <p>Hello</p>
                {wishlistToDisplay}
            </div>

        );
    }



















}
export default Wishlist;