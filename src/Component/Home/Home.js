import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Portfolios from '../Portfolios/Portfolios';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Portfolios></Portfolios>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;