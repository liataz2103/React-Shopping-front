import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

//functional component that gets title props from app and display navbar with title

const Navbar = props => {
    
        return (
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h1 style={titleStyle}> {props.title}</h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>My Cart</Link>
                    </li>
                </ul>
            </nav>

        );
    };
 Navbar.defaultProps = {
    title: 'Vintage Bazar'
    };
Navbar.propTypes = {
    title: PropTypes.string.isRequired
    };

const titleStyle = {
    fontSize: '20px',
  
}
    

export default Navbar
