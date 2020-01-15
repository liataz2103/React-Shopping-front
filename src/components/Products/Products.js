import React, { Component } from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default class Products extends Component {
    constructor(props) {
        super(props);

        this.state={
                index: props.index,
                products: props.products,
                amount:props.amount,
                addToCart: props.addToCart
                
                
        }
      }
      
     

      render() {
        let col = [];
        {this.state.products.map((element, i) => {
            col.push(
                <div className="col-sm py-3" key={this.state.index}>
                    <div className= "card card-body text-center">
                        <img
                        src = {element.image}    
                        alt = ''
                        className = 'round-img'
                        style = {{width: '100px', height: '150px'}}
                        />
                        <h4>{element.title}</h4> 
                        <p>$ {element.price}</p>
                        <div>
                            <Link  to="/cart" onClick={()=>{this.state.addToCart(i)}} className='btn btn-dark btn-sm-1'>Purchase</Link>
                        </div> 
                    </div>
                </div>
              )
              // each row has 3 columns inside
              if((i+1)%3 === 0) {
                  col.push(<div className="w-100"></div>)
                }
          
       
        })}
        // in each column we have the following items
        
		return (
            <div className="container">
                <div style={{ width: '100%' ,backgroundColor: "#E2CD6D", borderRadius: "15px", padding: "5px", boxSizing: "border-box", fontFamily: "Monoton"}}>
                <h1 style={{marginTop: '10px'}}>Our Products</h1>
                <div className="row justify-content-between" style={{width: '98%', marginLeft: '10px', marginRight: '10px'}}>
                    {col}
                
                </div>
            </div>
              
               </div>
            
        );
    }
}