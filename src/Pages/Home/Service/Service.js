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
            <img src={img} alt="" />
            <div className='card-content'>
                <h2>{name}</h2>
                <p><small>{description}</small></p>
                <button className='service-btn' onClick={() => navigateToServiceDetail(id)}>Know More</button>
            </div>
        </div>
    );
};

export default Service;