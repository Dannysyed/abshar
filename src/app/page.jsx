'use client'
import React, { useEffect, useState } from 'react';
import Swiper from '../../components/swiper';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Hearts } from 'react-loader-spinner'
import Lottie from "lottie-react";
import absharlogo from '../../public/images/AbhsarLogo.png'
import heart from '../../public/images/Animation - 1704131701382.json'
import school from '../../public/images/school.jpg'
import classroom from '../../public/images/classroom.jpg'
import codingAni from '../../public/images/Animation - 1704125449837.json'
import Image from 'next/image';

import EducationIcon from '../../public/icons/education.png';
import HealthcareIcon from '../../public/icons/healthcare.png';
import CommunityIcon from '../../public/icons/partners.png';
const HomePage = () => {
    const [pastEvents, setPastEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPastEvents = async () => {
            try {
                const response = await fetch('https://abshar-backend.onrender.com/events');
                if (!response.ok) {
                    throw new Error('Failed to fetch past events');
                }
                const data = await response.json();
                setPastEvents(data.slice(0, 2)); // Display only the first two events
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch past events');
                setLoading(false);
            }
        };

        fetchPastEvents();
    }, []);
    return (
        <div className='body_color'>
            <div >
                <Swiper />
            </div>
            <div className='body_color'>
                <section className='container mx-auto py-12'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                        <div className='text-center md:text-left'>
                            <h1 className='text-4xl font-bold mb-4'>Welcome to Abshar</h1>
                            <p className='text-lg mb-6 cursive'>
                                Echoes of Harmony, Fostering a Global Family.
                            </p>
                            <p className='text-lg mb-6'>
                                Our NGO is dedicated to making a positive impact on the community. Through various initiatives and programs, we strive to bring about positive changes in people's lives.
                            </p>

                            <button className='bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300'>
                                Get Involved
                            </button>
                        </div>
                        <div className='basis-2/5 ' >
                            <Lottie animationData={codingAni} loop={true} className='h-[50vh] sm:h-[70vh]' />
                        </div>
                    </div>
                </section>
                <section className='bg-gray-800 text-white py-12'>
                    <div className='container mx-auto'>
                        <h2 className='text-3xl font-bold mb-8 text-center'>Our Mission</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            {/* Left Side */}
                            <div className='border p-6 rounded-md relative overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg'>
                                {/* Gradient color on top of the card */}
                                <div className='absolute inset-0 rounded-t-md bg-gradient-to-b from-transparent to-body_color_dark opacity-90'></div>
                                <h3 className='text-xl font-semibold mb-4'>What We Do</h3>
                                <p className='mb-4'>
                                    We focus on providing education, healthcare, and support to underprivileged communities. Our aim is to create sustainable solutions to societal issues.
                                </p>
                                {/* See Pics button */}
                                <button className='bg-green-600 text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg'>
                                    Check out Page
                                </button>
                            </div>
                            {/* Right Side */}
                            <div className='border p-6 rounded-md shadow-lg hover:scale-105 hover:shadow-xl transition-transform'>
                                <h3 className='text-xl font-semibold mb-4'>How You Can Help</h3>
                                <p className='mb-4'>
                                    Your contributions and support enable us to continue our mission. Explore various ways to get involved, donate, or volunteer.
                                </p>
                                {/* Lottie Animation */}
                                <div className='basis-2/5 ' >
                                    <Lottie animationData={heart} loop={true} className='h-[22vh] sm:h-[20vh]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                <section className='bg-gray-100 py-12'>
                    <div className='container mx-auto text-center'>
                        <h2 className='text-3xl font-bold mb-6'>Our Impact</h2>
                        <p className='text-lg mb-10'>
                            We're proud of the positive changes we've brought about in people's lives. Here are some highlights of our impactful work.
                        </p>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            <div className='border p-6 rounded-md shadow-md bg-white flex flex-col items-center'>
                                <Image src={EducationIcon} className='w-20 h-20 mb-4' />
                                <h3 className='text-xl font-semibold mb-4'>Education Initiatives</h3>
                                <p className='text-base'>
                                    Our educational programs have impacted
                                    <span className='text-green-500 font-bold'> 5000+ students</span>,
                                    providing them with access to quality education and transforming their lives.
                                </p>
                            </div>
                            <div className='border p-6 rounded-md shadow-md bg-white flex flex-col items-center'>
                                <Image src={HealthcareIcon} className='w-20 h-20 mb-4' />
                                <h3 className='text-xl font-semibold mb-4'>Healthcare Support</h3>
                                <p className='text-base'>
                                    Through health campaigns and medical services, we've reached
                                    <span className='text-green-500 font-bold'> 10,000+ people</span> in need,
                                    providing essential healthcare services and promoting a healthier community.
                                </p>
                            </div>
                            <div className='border p-6 rounded-md shadow-md bg-white flex flex-col items-center'>
                                <Image src={CommunityIcon} className='w-20 h-20 mb-4' />
                                <h3 className='text-xl font-semibold mb-4'>Community Development</h3>
                                <p className='text-base'>
                                    Our community development initiatives have led to the completion of
                                    <span className='text-green-500 font-bold'> 20+ projects</span>,
                                    enhancing infrastructures and creating a positive impact on local communities.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='body_color_dark py-12'>
                    <div className='container mx-auto px-4'>
                        <h2 className='text-3xl font-bold mb-8 text-center'>Past Events</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            {loading ? (
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                    <Hearts
                                        height="100"
                                        width="100"
                                        color="#4fa94d"
                                        ariaLabel="hearts-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                    />
                                </div>
                            ) : error ? (
                                <p>Error: {error}</p>
                            ) : (
                                pastEvents.map(event => (
                                    <div key={event._id} className='rounded-lg overflow-hidden bg-white shadow-md'>
                                        <Image src={event.imageUrl} alt={event.title} className='w-full h-40 object-cover' height={100} width={100} />
                                        <div className='p-6'>
                                            <h3 className='text-xl font-semibold mb-4 text-gray-600'>{event.title}</h3>
                                            <p className='mb-4 text-gray-600'>{event.description}</p>
                                            <a href={`events/${event._id}`} className='block text-blue-600 hover:underline'>Read More</a>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className='flex justify-center mt-8'>
                            <a href='/events' className='bg-green-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300'>
                                View All Events
                            </a>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
};

export default HomePage;
