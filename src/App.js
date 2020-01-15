import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Slider from './components/layouts/Slider.js';
import Products from './components/Products/Products';
import Cart from './components/Products/Cart';


class App extends Component {

  state = {
    
    products: [
        {
          title: "Evening Dress", 
          image: require( "./images/dress.jpg" ),
          price: 29,
          amount: 0,
          subtotal: 0
    },
      {
          title: "Stripe Top", 
          image: require( "./images/top.jpg" ),
          price: 15,
          amount: 0,
          subtotal: 0
    },
    {
          title: "Vintage Jacket", 
          image: require( "./images/jacket.jpg" ),
          price: 15,
          amount: 0,
          subtotal: 0
      },
      {
          title: "Vintage Bag", 
          image: require( "./images/bag.jpg" ),
          price: 29,
          amount: 0,
          subtotal: 0
    },
    {
          title: "Button Shirt", 
          image: require( "./images/button_shirt.jpg" ),
          price: 35,
          amount: 0,
          subtotal: 0
    },
    {
          title: "Colorfull Dress", 
          image: require( "./images/colorfull_dress.jpg" ),
          price: 27,
          amount: 0,
          subtotal: 0
    },
      {
          title: "Classic Dress", 
          image: require( "./images/dress.jpg" ),
          price: 35,
          amount: 0,
          subtotal: 0
      },
  {
          title: "Jeans Dress", 
          image: require( "./images/jeans_dress.jpg" ),
          price: 35,
          amount: 0,
          subtotal: 0
  },
  
  {
          title: "Vintage shirt", 
          image: require( "./images/shirt.jpg" ),
          price: 15,
          amount: 0,
          subtotal: 0
  },
  {
          title: "Goldi Shoes", 
          image: require( "./images/shoes.jpg" ),
          price: 30,
          amount: 0,
          subtotal: 0
  },
  {
          title: "Blue Skirt", 
          image: require( "./images/skirt.jpg" ),
          price: 14,
          amount: 0,
          subtotal: 0
  }

  ],
  total: 0

    };


    // / Add to cart function (when purchased button is clicked)
    addToCart = (index) => {
      // create temp array that increnment amounts each time a buttn is clicked , and update subtotal and total
      let purcahsedQty = [...this.state.products];
      purcahsedQty[index].amount++;
      purcahsedQty[index].subtotal += purcahsedQty[index].price;
      this.setState({total: this.state.total + purcahsedQty[index].price})
      this.setState({products: [...purcahsedQty]});   
     
    }

    // checout - resset cart items
    checkout = () => {
      // set total back to zero
      this.setState({total: 0});
      let newArrToDisplay = [...this.state.products].map((product)=>{
        product.amount = 0;
        product.subtotal=0;
        return(product)
      });
      this.setState({products: [...newArrToDisplay]})
      if(this.state.total>0){
        alert("Thank you for shopping with us!")
      }
      

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
                <Products products= {this.state.products} addToCart = {this.addToCart} /> 
               </Fragment>
           
            )} />
             <Route exact path="/cart" render={props =>(
        <Fragment>
          <Cart products={this.state.products} total={this.state.total} checkout={this.checkout} />
          </Fragment>
          
          
    

        

      )} /> 
            
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}
  

export default App;
