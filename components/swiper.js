'use client'
import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import football from '../public/images/Football_heroImage1.jpg';
import Socks from '../public/images/socks.jpg';
import Football2 from '../public/images/Football2.jpg';
import Image from 'next/image';

const items = [
    {
        src: football,
        altText: 'Slide 1',
        caption: 'Welcome to Our NGO',
        description: 'Empowering Communities, Changing Lives.',
        key: 1,
    },
    {
        src: Socks,
        altText: 'Slide 2',
        caption: 'Supporting Those in Need',
        description: 'Providing Education, Health, and Essential Support.',
        key: 2,
    },
    {
        src: Football2,
        altText: 'Slide 3',
        caption: 'Join Us in Making a Difference',
        description: 'Volunteer, Donate, and Be Part of the Change.',
        key: 3,
    },
];

function Swiper() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
                className="position-relative"
            >
                <div className="w-full md:w-3/4 mx-auto">
                    <Image
                        src={item.src}
                        alt={item.altText}
                        className="w-full h-auto"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <div className="position-absolute w-full h-full bg-black opacity-50 top-0"></div>
                <CarouselCaption
                    captionText={item.description}
                    captionHeader={item.caption}
                    className="position-absolute w-full text-white"
                />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            interval={5000}
            className='vh-50 border-0'
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
}

export default Swiper;
