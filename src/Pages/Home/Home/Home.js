import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Qoute from '../Qoute/Qoute';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <>
            <PageTitle title='Home'></PageTitle>
            <Banner></Banner>
            <Qoute></Qoute>
            <Services></Services>
        </>
    );
};

export default Home;