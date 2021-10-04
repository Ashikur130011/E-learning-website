import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCopyright, 
    faPhone, 
    faAddressCard, 
    faEnvelope 
       } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-part bg-secondary text-white pt-4">
            <div>
                <h1 className="text-dark mb-3">Learning Tech</h1>
                <ul><FontAwesomeIcon icon={faPhone}/> (+75) 36 6552 9564</ul>
                <ul><FontAwesomeIcon icon={faEnvelope}/> contact@domain.com</ul>
                <ul><FontAwesomeIcon icon={faAddressCard}/> Washington, United State</ul>
            </div>
            <div>
                <h1 className="text-dark mb-3">Category</h1>
                <ul>Privacy & Poilicy</ul>
                <ul>Terms & Condition</ul>
                <ul>Customer Support</ul>
                <ul>Support</ul>
            </div>
            <div>
                <h1 className="text-dark mb-3">Useful Links</h1>
                <ul><a className="footer-link text-white" href="/home">Home</a></ul>
                <ul><a className="footer-link text-white" href="/service">Services</a></ul>
                <ul><a className="footer-link text-white" href="/about">About Us</a></ul>
                <ul>Free Courses</ul>
            </div>
            <div>
                <h1 className="text-dark mb-3">Other</h1>
                <ul>Study</ul>
                <ul>Skills</ul>
            </div>
            </div>
            <footer className="bg-black text-white">Copyright <FontAwesomeIcon icon={faCopyright}/> 2021 Learning Tech.All rights Reserved.</footer>
        </div>
    );
};

export default Footer;