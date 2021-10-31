import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselBanner = () => {
    return (
        <div className="mb-5">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/K20HFb1/bigbanner-turkey.jpg"
                        alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/X8p7vvf/bigbanner-England.jpg"
                        alt="Second slide"
                    />

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/6N8VmWb/Niagara-falls.jpg"
                        alt="Second slide"
                    />

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/6DzX6wG/1-cherry-blsm2.jpg"
                        alt="Second slide"
                    />

                    
                </Carousel.Item>
                
            </Carousel>
        </div>
    );
};

export default CarouselBanner;