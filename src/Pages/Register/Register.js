import React, { Children, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Register = () => {
    const [accept, setAccept] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const accept = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home');
    }

    return (
        <div className='register-form'>
            <PageTitle title='Register'></PageTitle>
            <h2 className='register-head'>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' className='form-control' />
                <input type="email" name="email" id="" placeholder='Email Address' required className='form-control' />
                <input type="password" name="password" id="" placeholder='Password' required className='form-control' />
                <input onClick={() => setAccept(!accept)} type="checkbox" name="terms" id="terms" />
                <label className={accept ? 'ps-2 text-white' : 'ps-2 text-danger'} htmlFor="terms">Accept Terms and Conditions</label>
                <input disabled={!accept} className='submit-btn btn btn-primary w-25 mx-auto d-block mb-2 mt-2' type="submit" value="Register" />
            </form>
            <p className='login-content'>Already have an account? <Link to='/login' className='login-text' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;