import React, { Component } from 'react'
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class Cart extends Component {
    static propTypes = {
        products: propTypes.array.isRequired,
        total: propTypes.number.isRequired,
        checkout: propTypes.func.isRequired
    }


      componentDidMount(){
        console.log(this.props.product);
    }


    render() {
        let purchasedItems = [];
            {this.props.products.filter((product) => {
                return(
                  product.amount!=0
                );

              }).map((product, i) => {
                  purchasedItems.push(
                    <div className="conatainer">
                        <h4>{product.title} {product.amount} x {product.price} &nbsp; subtotal:{product.subtotal} &nbsp;</h4>
                    </div>
                  )

              })}
              
       
        return (
            <div className="container">
                <div className="title">
                    <h1 style={{fontFamily: "Monoton"}}>Purchased Items:</h1>
                </div>
                {purchasedItems}
                <div>Total: {this.props.total} </div>
                 <Link  to="/products" style={{backgroundColor: "#E2CD6D"}} className='btn btn-dark btn-sm-1'>Continue Shopping</Link>
                 <button  onClick={this.props.checkout} style={{backgroundColor: "#E2CD6D"}} className='btn btn-dark btn-sm-1'>Checkout</button>
            </div>
        )
        }
    }