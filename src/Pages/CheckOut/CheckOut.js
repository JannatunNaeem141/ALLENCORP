import React from 'react';
import { useForm } from 'react-hook-form';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './CheckOut.css'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const CheckOut = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        await sleep(2000);
        if (data.username === "bill") {
            alert(JSON.stringify(data));
        } else {
            alert("There is an error");
        }
    };
    console.log(errors);

    return (
        // <div className='checkout'>
        //     <h2 className='checkout-text'>Checkout content is coming soon...</h2>
        // </div>
        <form className='checkout-form' onSubmit={handleSubmit(onSubmit)}>
            <PageTitle title='CheckOut'></PageTitle>
            <h1 className='checkout-head'>CheckOut</h1>
            <label className='checkout-label' htmlFor="firstName">First Name</label>
            <input className='checkout-input' placeholder="First Name" {...register("firstName")} />

            <label className='checkout-label' htmlFor="lastName">Last Name</label>
            <input className='checkout-input' placeholder="Last Name" {...register("lastName")} />

            <label className='checkout-label' htmlFor="email">Email</label>
            <input className='checkout-input'
                placeholder="Your Email"
                type="text"
                {...register("email")}
            />

            <div style={{ color: "red" }}>
                {Object.keys(errors).length > 0 &&
                    "There are errors, check your console."}
            </div>
            <div className='text-center'><input type="submit" className='checkout-button' /></div>
        </form>
    );
};

export default CheckOut;