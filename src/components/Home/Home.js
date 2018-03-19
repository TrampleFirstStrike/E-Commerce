import React, { Component } from 'react';
import './Home.css';
import sawl from 'sweetalert';
import { NavLink } from 'react-router-dom';


class Home extends Component {
    render () {
        return (
            <div className="section-1">
            <div className="content">
                <h2 className="hero-text">Welcome to Your Xbox One Video Game Store</h2>
                <p className="hero-sub-text">Click <NavLink to="/store">Store</NavLink> to begin shopping!</p>
                <a href="" className="btn"></a>
            </div>
            </div>

        )
    }
}

export default Home;
