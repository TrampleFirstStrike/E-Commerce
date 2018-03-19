import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <nav>
				<div className="nav-desktop">
                <img className="logo"  src={require("../../images/logo.png")} alt="" />
					<div className="nav-links-desktop">
                    <NavLink exact to="/" className="nav-link-desktop">Home</NavLink>
                    <NavLink to="/store" className="nav-link-desktop">Store</NavLink>
                    <NavLink to="/shoppingcart" className="nav-link-desktop">Shopping Cart</NavLink>
                    <NavLink to="/Wishlist" className="nav-link-desktop">Wishlist</NavLink>
                    <NavLink to="/Auth" className="nav-link-desktop">Login</NavLink>
					</div>
				</div>
				<div className="nav-mobile">
                <img className="logo"  src={require("../../images/logo.png")} alt="" />
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="nav-links-mobile">
                        <NavLink exact to="/" className="nav-link-mobile">Home</NavLink>
                        <NavLink to="/store" className="nav-link-mobile">Store</NavLink>
                        <NavLink to="/shoppingcart" className="nav-link-mobile">Shopping Cart</NavLink>
                        <NavLink to="/Wishlist" className="nav-link-mobile">Wishlist</NavLink>
                        <NavLink to="/Auth" className="nav-link-mobile">Login</NavLink>
					</div>
				</div>
			</nav>
               
                

        )
    }
    
}
export default Header;

