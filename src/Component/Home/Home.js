import React from 'react';
import BangladeshPlace from '../BangladehPlace/BangladeshPlace';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import Header from '../Header/Header';
import OthersPlace from '../OthersPlace/OthersPlace';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Packages></Packages>
            <CarouselBanner></CarouselBanner>
            <OthersPlace></OthersPlace>
            <BangladeshPlace></BangladeshPlace>
        </div>
    );
};

export default Home;