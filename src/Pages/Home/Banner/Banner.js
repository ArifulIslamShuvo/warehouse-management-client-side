import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-img-1.png';
import banner2 from '../../../images/banner/banner-img-2.png';
import banner3 from '../../../images/banner/banner-img-1.png';





const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>MODERN FURNITUREFOR YOUR BEAUTIFUL HOME</h3>
                    <p>Our products combine functional utility with elegance, keeping in viewthe efficient use of floor space.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>MODERN FURNITUREFOR YOUR BEAUTIFUL HOME</h3>
                    <p>Our products combine functional utility with elegance, keeping in viewthe efficient use of floor space.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>MODERN FURNITUREFOR YOUR BEAUTIFUL HOME</h3>
                    <p>Our products combine functional utility with elegance, keeping in viewthe efficient use of floor space.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;