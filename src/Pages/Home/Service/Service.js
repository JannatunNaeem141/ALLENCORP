import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, id } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        // navigate(`/service/${id}`);
        navigate('/checkout');
    }
    return (
        <Card className='service'>
            <Card.Img variant="top" src={img} />
            <Card.Body className='card-content'>
                <Card.Title className='card-head'>{name}</Card.Title>
                <Card.Text>
                    <small>{description}</small>
                </Card.Text>
                <Button variant="primary" className='service-btn' onClick={() => navigateToServiceDetail(id)}>Know More</Button>
            </Card.Body>
        </Card>
    );
};

export default Service;