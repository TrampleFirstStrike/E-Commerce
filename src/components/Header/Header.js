import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div>
                <div className="header-container">
                    <div className="logo-container">
                        {/* <Link to="/"><img className="logo-image" src={Logo} alt="" /></Link> */}
                    </div>

                    <div className="header-links-container">
                        <ul className="header-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/store">Store</Link></li>
                            <li><Link to="/shoppingcart">Shopping Cart</Link></li>
                            <li><Link to="/Auth">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;

