import { Button } from 'react-bootstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-icon">
                <img style={{ width: '200px' }} src="/icon.png" alt="" />
                <h1 className="fw-bold text-primary">Learning Tech</h1>
            </div>
            <nav>
                <NavLink to="/home" className="header-nav fw-bold">Home</NavLink>
                <NavLink to="/services" className="header-nav fw-bold">Services</NavLink>
                <NavLink to="/about" className="header-nav fw-bold">About Us</NavLink>
                <NavLink to="/contact" className="header-nav fw-bold">Contact</NavLink>
                <Button variant="success">Sign-in</Button>
            </nav>
        </div>
    );
};

export default Header;