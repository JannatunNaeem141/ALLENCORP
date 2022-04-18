import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../images/slide1.jpg'
import slide2 from '../../../images/slide2.jpg'
import slide3 from '../../../images/slide3.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <Carousel fade className='carousel'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
                <Carousel.Caption className='caption'>
                    <div>
                        <h3 className='caption-head'>SUPPORT YOUR BUSINESS WITH INNOVATIVE LEARNING</h3>
                        <p className='caption-text'>Learn how to make innovation a key process, how to plan for it and how to create a suitable business environment for developing your ideas.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                />

                <Carousel.Caption className='caption'>
                    <div>
                        <h3 className='caption-head'>BUILD EMPLOYEE CAPABILITIES WITH IMPACTFUL LEARNING</h3>
                        <p className='caption-text'>Want to really develop your employees and ensure they become long-term valuable assets able to lead your business?</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />

                <Carousel.Caption className='caption'>
                    <div>
                        <h3 className='caption-head'>SCALE TALENT READINESS TO DRIVE CHANGE</h3>
                        <p className='caption-text'>Assess scaling readiness at any time to drive change.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;