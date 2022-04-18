import React from 'react';
import { useForm } from 'react-hook-form';
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>CheckOut</h1>
            <label htmlFor="firstName">First Name</label>
            <input placeholder="First Name" {...register("firstName")} />

            <label htmlFor="lastName">Last Name</label>
            <input placeholder="Last Name" {...register("lastName")} />

            <label htmlFor="email">Email</label>
            <input
                placeholder="Your Email"
                type="text"
                {...register("email")}
            />

            <div style={{ color: "red" }}>
                {Object.keys(errors).length > 0 &&
                    "There are errors, check your console."}
            </div>
            <input type="submit" className='checkout-btn' />
        </form>
    );
};

export default CheckOut;