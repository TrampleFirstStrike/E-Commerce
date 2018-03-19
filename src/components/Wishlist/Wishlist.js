import React, { Component } from 'react';
import "./Wishlist.css";
import axios from 'axios';

class Wishlist extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.removeFromMyWishlist = this.removeFromMyWishlist.bind(this);
        this.wishlistInput = this.wishlistInput.bind(this);

        this.state = {
            wishlist: [],
            wishlistName: "",
            updatedWishlistName: ""
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
            console.log(response)
            this.setState({wishlist: response.data})
        }).catch(console.log)
    }

    wishlistInput(name) {
        this.setState({wishlistName: name})
        console.log(this.state.wishlistName)
    }

    editWishlistName() {
        let body = {name:this.state.wishlistName}
        axios.put('/api/wishlist', body).then(response => {
            this.setState({updatedWishlistName: response.data})
        })

    }
    render() {
        {this.state.wishlistName}
        console.log(this.state.wishlist)
        let wishlistToDisplay = this.state.wishlist.map((element, index) => {
            return (
                <div className="">
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
            <div className="wrapper">
                <div className="section-2">
                <button id="submit-button" onClick= {()=>this.editWishlistName()}>Submit Wishlist Title Change</button><input id="submit-button" type="text" onChange={e=>this.wishlistInput(e.target.value)}/>
                {wishlistToDisplay}
                </div>
            </div>

        );
    }



















}
export default Wishlist;