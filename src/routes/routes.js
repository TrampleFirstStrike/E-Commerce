import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from '../components/Home/Home';
import Store from '../components/Store/Store';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';
import Auth from '../components/Auth/Auth'

export default (
    <Switch>
        <Route path="/Store" component={ Store } />
        <Route path="/ShoppingCart" component={ ShoppingCart } />
        <Route path="/Auth" component={ Auth } />
        <Route exact path="/" component={ Home } />
    </Switch>
)