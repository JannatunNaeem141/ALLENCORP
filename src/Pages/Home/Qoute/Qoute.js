import React from 'react';
import './Qoute.css';

const Qoute = () => {
    return (
        <div className='quote-item'>
            <blockquote className='quote'>
                <p>
                    "AllenCorp has been a trusted and valued
                    partner for their ability to deliver quality
                    offerings with graphics and detail that goes far beyond that of most vendors in this space."
                </p>
            </blockquote>
            <p className='author'>Bd MEDICAL</p>
        </div>
    );
};

export default Qoute;