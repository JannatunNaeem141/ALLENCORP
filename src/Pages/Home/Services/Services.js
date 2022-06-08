import React, { useEffect, useState } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://shielded-oasis-64557.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='services'>
            <PageTitle title='Services'></PageTitle>
            <h1 id='services' className='services-title mt-5'> Services</h1>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;