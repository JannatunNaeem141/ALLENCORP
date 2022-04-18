import React from 'react';
import Banner from '../Banner/Banner';
import Qoute from '../Qoute/Qoute';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Qoute></Qoute>
            <Services></Services>
        </>
    );
};

export default Home;