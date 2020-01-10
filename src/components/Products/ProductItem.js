import React from 'react';




// this is a function compnent that takes props from
//products that include each product, and them is displays it in a 
// product item card

function ProductItem(props) {

    return (
        // gets the div from products, and set the div in which it displays
        <div className = 'card text-center'>
            <img
                src = {props.product.image}    
                alt = ''
                className = 'round-img'
                style = {{width: '100px'}}
            />
            <h4>{props.product.title}</h4> 
            <p>{props.product.price}</p>
            <div>
                <button className='btn btn-dark btn-sm-1'>View Cart</button>
            </div>   
        </div>
    )
    
}

export default ProductItem
