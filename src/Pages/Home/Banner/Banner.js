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
                    <h3>SUPPORT YOUR BUSINESS WITH INNOVATIVE LEARNING</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                />

                <Carousel.Caption className='caption'>
                    <h3>BUILD EMPLOYEE CAPABILITIES WITH IMPACTFUL LEARNING</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />

                <Carousel.Caption className='caption'>
                    <h3>SCALE TALENT READINESS TO DRIVE CHANGE</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;