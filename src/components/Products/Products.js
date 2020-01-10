import React from 'react';
import ProductItem from "./ProductItem"


const Products = (props) => {
    
    return (
        <div>
            <h1 style={{marginTop: '100px'}}>Products</h1>
            <div style={productStile}>
           
            {/* Takes the products array as props from app.js, loops through the products and send productItem component each product in a div with specific style */}
            {props.products.map(product =>(
                <ProductItem key={product.id} product={product} />
            ))}   
        </div>
        </div>
         );
    }

        
        

const productStile = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 'rem',
    marginTop: '10px'
}

export default Products
