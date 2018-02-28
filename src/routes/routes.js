import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from './components/Home/Home';
import ProductPage from './components/ProductPage/ProductPage';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Auth from './components/Auth/Auth';

export default (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/2" component={ ProductPage } />
        <Route path="/3" component={ ShoppingCart } />
        <Route path="/4" component={ Auth } />
    </Switch>
)