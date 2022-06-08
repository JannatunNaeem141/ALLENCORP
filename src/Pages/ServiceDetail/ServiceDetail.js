import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://shielded-oasis-64557.herokuapp.com/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className='service-details'>
            <div className='text-center'>
                <div className='service-text'>
                    <h2>Your are about to book: {service.name}</h2>
                    <p>Details content is coming soon...</p>
                </div>
                <Link to='/checkout'>
                    <button className='checkout-btn'> Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;