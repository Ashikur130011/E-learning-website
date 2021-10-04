import { Button } from 'react-bootstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <h1>Learning Tech</h1>
            <nav >
                <NavLink to="/home" className="header-nav">Home</NavLink>
                <NavLink to="/services" className="header-nav">Services</NavLink>
                <NavLink to="/about" className="header-nav">About Us</NavLink>
                <NavLink to="/contct" className="header-nav">Contract</NavLink>
                <Button variant="success">Sign-in</Button>
            </nav>
        </div>
    );
};

export default Header;