import React, { Component } from 'react';
import "./Wishlist.css";
import axios from 'axios';

class Wishlist extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.removeFromMyWishlist = this.removeFromMyWishlist.bind(this);

        this.state = {
            wishlist: []
        };
    }

    handleClick(id) {
        axios.post("/api/addToWishlist", { id });
    }

    removeFromMyWishlist(id) {
        axios.delete(`/api/removeFromWishlist/${ id }`).then(response => {
            console.log(response)
            this.setState({wishlist: response.data})
        }).catch(console.log)
    }

    componentDidMount() {
        console.log("HIT")
        axios.get("/api/getUserWishlist").then(response => {
            this.setState({wishlist: response.data})
        }).catch(console.log)
    }
    render() {
        console.log(this.state.wishlist)
        let wishlistToDisplay = this.state.wishlist.map((element, index) => {
            return (
                <div>
                    <figure>
                        <img src={element.image_url}/>
                        <h1 className="product-price">${element.price}.00</h1>
                    </figure>
                    <button
                        onClick={() => this.removeFromMyWishlist(element.id)}
                        className="cart-button">
                        Delete from Wishlist
                    </button>
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