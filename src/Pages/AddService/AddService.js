import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://shielded-oasis-64557.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='service-form'>
                <h2 className='service-head'>Please add a service</h2>
                <input className='service-input' {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                <textarea className='service-input' {...register("description")} placeholder='Description' />
                <input className='service-input' type="number" {...register("price")} placeholder='Price' />
                <input className='service-input' type="text" {...register("img")} placeholder='Photo URL' />
                <input className='service-button' type='submit' value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;