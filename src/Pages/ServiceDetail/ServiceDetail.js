import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='service-details'>
            <div className='text-center'>
                <div className='service-text'>
                    <h2>This page is about details of serviceId: {serviceId}</h2>
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