import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='footer-text'>
            <p><small>Copyright &copy; {year}  -  All Rights Reserved  -  ALLEN<span>CORP</span></small></p>
        </footer>
    );
};

export default Footer;