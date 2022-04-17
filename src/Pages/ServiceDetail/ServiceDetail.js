import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    console.log(serviceId);
    return (
        <div>
            <h2>Welcome to details {serviceId}</h2>
            <Link to='/checkout'>
                <div className='text-center'>
                    <button className='btn btn-primary'> Checkout</button>
                </div>
            </Link>
        </div>
    );
};

export default ServiceDetail;