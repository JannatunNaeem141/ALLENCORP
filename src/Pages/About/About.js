import React from 'react';
import profile from '../../images/Profile.jpg';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <div className='about-content'>
                <h2 className='text-center fw-bold'>Jannatun Naeem</h2>
                <p>
                    Hi! My name is Naeem. I am a full stack web developer, looking to enhance my professional experience. I'm skilled with HTML5, CSS3, JavaScript, Python, React.js, Node.js, MongoDB etc.
                </p>

                <p>
                    My strength are being hard-working, easily adaptable to any kind of environment, and being hard-working, honest. Punctuate, self-motivated and team worker. But my weakness is I am not comfortable until I finished my work in the given time.
                </p>

                <p>
                    My short-term goal is to get a job in a reputed company in which I can grow my working skills and get more and more knowledge and gain financial independence. Besides my long-term goal is to become a more responsible and knowledgeable personality.
                </p>

                <p>
                    I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the moonlight at night. And to mention that coding is my all-time favorite.
                </p>
            </div>
            <div className='about-img'>
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default About;