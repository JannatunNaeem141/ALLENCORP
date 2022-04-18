import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png';
import github from '../../../images/github.png';
import Loading from '../../Shared/Loading/Loading';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <div><p className='text-danger'>Error: {error?.message}{error1?.message} </p></div>
    }
    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='divider-container'>
                <div className='divider'></div>
                <p className='divider-text'>or</p>
                <div className='divider'></div>
            </div>
            {/* <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='login-div'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div> */}
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='sign-in-btn'><img style={{ width: '30px' }} src={google} alt="" /> <span className='px-2'>Google Sign In</span></button>
            </div>
            <div>
                <button onClick={() => signInWithGithub()} className='sign-in-btn'><img style={{ width: '30px' }} src={github} alt="" /> <span className='px-2'>GitHub Sign In</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;