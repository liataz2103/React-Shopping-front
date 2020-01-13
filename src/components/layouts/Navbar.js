import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

//functional component that gets title props from app and display navbar with title

const Navbar = props => {
    
        return (
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{height: "75px"}} >
                <div className="container">
                <Link style ={{color: "#E2CD6D",}}className="navbar-brand" to="/" target="_blank">Vintage Online</Link>
                    <ul className="navbar-nav mr-auto front-nav" >
                        <li className="nav-item" >
                            <Link style ={{color: "#E2CD6D"}} className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link style ={{color: "#E2CD6D"}} className="nav-link" to='/about'>My Cart</Link>
                        </li>
                    </ul>
                    <form className="form-inline" >
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{height: "30px" }}/>
                        <button className="btn btn-outline my-2 my-sm-0" style={{height: "30px", backgroundColor: "#E2CD6D" }} type="submit">Search</button>
                    </form>
                </div>
            </nav>

        );
    };
 Navbar.defaultProps = {
    title: 'Vintage Bazar'
    };
Navbar.propTypes = {
    title: PropTypes.string.isRequired
    };


    

export default Navbar
