import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Slider from './components/layouts/Slider.js';
import Products from './components/Products/Products';
import About from './components/pages/About';
import Cart from './components/Products//Cart';


class App extends Component {

  state = {

    cartItems: [{
      cartTitle: "",
      cartPrice: ""
    }],
  
    products: [
      {
        title: "Evening Dress", 
        image: require( "./images/dress.jpg" ),
        price: "29.99"
   },
    {
        title: "Stripe Top", 
        image: require( "./images/top.jpg" ),
        price: "14.99"
  },
   {
        title: "Vintage Jacket", 
        image: require( "./images/jacket.jpg" ),
        price: "14.99"
    },
    {
        title: "Vintage Bag", 
        image: require( "./images/bag.jpg" ),
        price: "29.99"
  },
  {
        title: "Button Shirt", 
        image: require( "./images/button_shirt.jpg" ),
        price: "35:00"
  },
  {
        title: "Colorfull Dress", 
        image: require( "./images/colorfull_dress.jpg" ),
        price: "27.00"
  },
    {
        title: "Classic Dress", 
        image: require( "./images/dress.jpg" ),
        price: "35.00"
    },
{
        title: "Jeans Dress", 
        image: require( "./images/jeans_dress.jpg" ),
        price: "35.00"
},
{
        title: "Designed neckless", 
        image: require( "./images/neckless.jpg" ),
        price: "25.00"
},
{
        title: "Vintage shirt", 
        image: require( "./images/shirt.jpg" ),
        price: "15.00"
},
{
        title: "Goldi Shoes", 
        image: require( "./images/shoes.jpg" ),
        price: "29.99"
},
{
        title: "Blue Skirt", 
        image: require( "./images/skirt.jpg" ),
        price: "14.99"
}

],

  }



 addToCart = (t, p ) =>{
   this.setState({cartItems: [{cartTitle:t, cartPrice:p}]});
  
 }
 
  render() {
    return (
      <Router>    
      <div className="App">
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path='/' render={props =>(
              <Fragment>
                <Slider/>
              </Fragment>
            )} />
            <Route exact path='/products' render={props =>(
              <Fragment>
                <Products products={this.state.products} addToCart={this.addToCart} />
              </Fragment>
            )} />

            <Route exact path="/cart" render={props =>(
              <Fragment>
              <Cart cartItems={this.state.cartItems} />
              </Fragment>

            )} />
            
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/user/:login" render={props =>(
              <User {...props} getUser={this.getUser} user={this.state.user} loading={this.state.loading} />

            )} /> */}
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}
  

export default App;
