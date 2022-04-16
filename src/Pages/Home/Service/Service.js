import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, id } = service;
    return (
        <div className='service'>
            <img style={{ width: '400px' }} src={img} alt="" />
            <h2>{name}</h2>
            <p><small>{description}</small></p>
            <button>Book: {name}</button>
        </div>
    );
};

export default Service;