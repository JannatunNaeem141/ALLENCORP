import React, { useState } from 'react';
import banner from '../../../images/service3.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <img className='img' src={banner} alt="" />
        </div>
    );
};

export default Banner;