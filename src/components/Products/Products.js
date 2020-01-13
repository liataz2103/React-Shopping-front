import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Products extends Component {
    static propTypes = {
        products: propTypes.array.isRequired,
        addToCart: propTypes.func.isRequired
    }

    state = {
        clickedTitle: "" ,
        clickedPrice: ""
      }

    addToCartActivator = () => {
        // this.setState({clickedTitle: product.title, clickedPrice: product.price} )

        // this.props.addToCart(this.state.clickedTitle, this.state.clickedPrice);
        console.log("clicked");
        console.log(this.refs.title.value);
      
    }

    render() {
        let columns=[];
        {this.props.products.map((product, i)=>{
            // push column
            columns.push(
                <div className="col-md py-3" key={i}>
                    <div className= "card card-body text-center">
                        <img
                        src = {product.image}    
                        alt = ''
                        className = 'round-img'
                        style = {{width: '100px', height: '150px'}}
                        />
                        <h4 ref="title">{product.title}</h4> 
                        <p>$ {product.price}</p>
                        <div>
                            <button onClick={this.addToCartActivator} className='btn btn-dark btn-sm-1'>Purchase</button>
                        </div> 
                    </div>
    			</div>
    		)
            
            // force wrap to next row every 4 columns
            if ((i+1)%3===0) {columns.push(<div className="w-100" key={null}></div>)}
        })
		return (
            <div style={{ width: '100%' ,backgroundColor: "#E2CD6D", borderRadius: "15px", padding: "5px", boxSizing: "border-box", fontFamily: "Monoton"}}>
                <h1 style={{marginTop: '10px'}}>Our Products</h1>
                <div className="row justify-content-between" style={{width: '98%', marginLeft: '10px', marginRight: '10px'}}>
                {columns}
                </div>
            </div>
        );
        }
    }          
}

