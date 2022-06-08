import React from 'react';
import useServices from '../../hooks/useServices';
import './ManageServices.css';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://shielded-oasis-64557.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })
        }
    }
    return (
        <div className='manage-services'>
            <h2>Manage your services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;