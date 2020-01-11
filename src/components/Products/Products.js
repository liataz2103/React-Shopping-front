import React from 'react';
import ProductItem from "./ProductItem"


const Products = (props) => {
    
    return (
        <div style={{backgroundColor: "#E2CD6D", borderRadius: "15px", padding: "5px", boxSizing: "border-box", fontFamily: "Monoton"}}>
            <h1 style={{marginTop: '10px'}}>Our Products</h1>
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
    gridGap: 'rem'
    
    
}

export default Products
