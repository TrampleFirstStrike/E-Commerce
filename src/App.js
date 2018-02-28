import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Store from './components/Store/Store';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import { Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';

class App extends Component {
  constructor() {
    super();

    this.state = {
      shoppingCart: []
    }

    this.addToShoppingCart = this.addToShoppingCart.bind(this);
    this.removeFromShoppingCart = this.removeFromShoppingCart.bind(this);
  }

  addToShoppingCart(product) {
    this.setState({
      shoppingCart: [...this.state.shoppingCart, product]
    })
    console.log(this.state.shoppingCart);
  }

  removeFromShoppingCart(product) {
    let newShoppingCart = this.state.shoppingCart;
    newShoppingCart.splice(newShoppingCart.indexOf(product), 1);
    this.setState({
      shoppingCart: newShoppingCart
    })
    console.log(this.state.shoppingCart);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route path="/Auth" component={Auth} />
          <Route path="/store" render={() => {
            return <Store
            addToShoppingCart={this.addToShoppingCart} />
          }} />
          <Route path="/shoppingcart" render={() => {
            return <ShoppingCart
            shoppingCart={this.state.shoppingCart}
            removeFromShoppingCart={this.removeFromShoppingCart} />
          }} />
          </Switch>
      </div>
    );
  }
}


export default App;
