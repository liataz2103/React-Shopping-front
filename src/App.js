import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Slider from './components/layouts/Slider.js';
import Products from './components/Products/Products';
import About from './components/pages/About';


class App extends Component {

  state = {
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
    }
]
  
  }
 
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar/>
        <Slider/>
        <div className="container">
          <Switch>
            <Route exact path='/' render={props =>(
              <Fragment>
                <Products products={this.state.products} />
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
