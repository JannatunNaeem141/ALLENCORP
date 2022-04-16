import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, id } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img style={{ width: '400px' }} src={img} alt="" />
            <h2>{name}</h2>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)}>Book: {name}</button>
        </div>
    );
};

export default Service;