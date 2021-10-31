import React from 'react';
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
        </div>
    );
};

export default Home;