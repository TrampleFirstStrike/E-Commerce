import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
           
                <div className="header-container">
                   
                    <img className="logo"  src={require("../../images/logo.png")} alt="" />
                    

                    <div className="header-links-container">
                        <ul className="header-list">
                            <li className="header-link-item"><NavLink exact to="/" className="header-link">Home</NavLink></li>
                            <li className="header-link-item"><NavLink to="/store" className="header-link">Store</NavLink></li>
                            <li className="header-link-item"><NavLink to="/shoppingcart" className="header-link">Shopping Cart</NavLink></li>
                            <li className="header-link-item"><NavLink to="/Wishlist" className="header-link">Wishlist</NavLink></li>
                            <li className="header-link-item"><NavLink to="/Auth" className="header-link">Login</NavLink></li>
                        </ul>
                    </div>
                </div>
            
        )
    }
}

export default Header;

