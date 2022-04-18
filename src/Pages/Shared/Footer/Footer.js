import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='footer-text'>
            <p><small>Copyright &copy; {year}</small></p>
        </footer>
    );
};

export default Footer;