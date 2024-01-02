'use client'
import React from 'react';
import Swiper from '../../components/swiper';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiMousePointer, FiFacebook, FiInstagram, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import Lottie from "lottie-react";
import absharlogo from '../../public/images/AbhsarLogo.png'
import heart from '../../public/images/Animation - 1704131701382.json'
import school from '../../public/images/school.jpg'
import classroom from '../../public/images/classroom.jpg'
import codingAni from '../../public/images/Animation - 1704125449837.json'
import Image from 'next/image';
const HomePage = () => {
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
                            <p className='text-lg mb-6'>
                                Our NGO is dedicated to making a positive impact on the community. Through various initiatives and programs, we strive to bring about positive changes in people's lives.
                            </p>
                            <p className='text-lg mb-6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat varius sem, vel sodales velit eleifend id.
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



                <section className='body_color py-12'>
                    <div className='container mx-auto text-center'>
                        <h2 className='text-3xl font-bold mb-4'>Our Impact</h2>
                        <p className='text-lg mb-8'>
                            We're proud of the positive changes we've brought about in people's lives. Here are some highlights of our impactful work.
                        </p>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            <div className='border p-6 rounded-md'>
                                <h3 className='text-xl font-semibold mb-4'>Education Initiatives</h3>
                                <p>
                                    Number of students enrolled, educational programs conducted, or success stories of students.
                                </p>
                            </div>
                            <div className='border p-6 rounded-md'>
                                <h3 className='text-xl font-semibold mb-4'>Healthcare Support</h3>
                                <p>
                                    Health campaigns held, medical services provided, or testimonials from beneficiaries.
                                </p>
                            </div>
                            <div className='border p-6 rounded-md'>
                                <h3 className='text-xl font-semibold mb-4'>Community Development</h3>
                                <p>
                                    Community projects completed, infrastructure developed, or community testimonials.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='body_color_dark py-12'>
                    <div className='container mx-auto px-4'>
                        <h2 className='text-3xl font-bold mb-8 text-center'>Upcoming Events</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            {/* Event Card 1 */}
                            <div className='rounded-lg overflow-hidden bg-white shadow-md'>
                                <Image src={classroom} alt='Event 1' className='w-full h-40 object-cover' />
                                <div className='p-6'>
                                    <h3 className='text-xl font-semibold mb-4 text-gray-600'>School Event</h3>
                                    <p className='mb-4 text-gray-600'>
                                        Description or details about the upcoming event. Date, time, location, and how to participate.
                                    </p>
                                    <a href='#' className='block text-blue-600 hover:underline'>Read More</a>
                                </div>
                            </div>
                            {/* Event Card 2 */}
                            <div className='rounded-lg overflow-hidden bg-white shadow-md'>
                                <Image src={school} alt='Event 2' className='w-full h-40 object-cover' />
                                <div className='p-6'>
                                    <h3 className='text-xl font-semibold mb-4 text-gray-600'>Classroom Event</h3>
                                    <p className='mb-4 text-gray-600'>
                                        Description or details about the upcoming event. Date, time, location, and how to participate.
                                    </p>
                                    <a href='#' className='block text-blue-600 hover:underline'>Read More</a>
                                </div>
                            </div>
                            {/* Add more event cards as needed */}
                        </div>
                        <div className='flex justify-center mt-8'>
                            <a href='#' className='bg-green-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300'>
                                View All Events
                            </a>
                        </div>
                    </div>
                </section>

                <footer className="body_color py-6 rounded-fullxl">
                    <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center ">
                        {/* Left side: Contact, Address, Mail, Socials */}
                        <div className="mb-4 lg:mb-0 lg:pr-8">
                            <p className="mb-2">Contact: +91 8899037321</p>
                            <p className="mb-2">Address: Uri, Kashmir</p>
                            <p>Email: abshartrust2021@gmail.com</p>
                            <div className="flex gap-4 mt-2 lg:mt-0">
                                <a href="https://www.facebook.com/abshar_trust" target="_blank" rel="noopener noreferrer"><FiFacebook style={{ fontSize: '24px' }} /></a>
                                <a href="https://www.instagram.com/abshar_trust" target="_blank" rel="noopener noreferrer"><FiInstagram style={{ fontSize: '24px' }} /></a>
                                <a href="https://twitter.com/abshartrust?lang=en" target="_blank" rel="noopener noreferrer"><FiTwitter style={{ fontSize: '24px' }} /></a>
                                <a href="https://www.linkedin.com/company/aabshar-source-of-humanity/" target="_blank" rel="noopener noreferrer"><FiLinkedin style={{ fontSize: '24px' }} /></a>
                                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FiGithub style={{ fontSize: '24px' }} /></a>
                            </div>
                        </div>
                        {/* Center: Logo */}
                        <div className="text-center lg:text-left mb-4 lg:mb-0">
                            {/* Your NGO logo */}
                            <Image src={absharlogo} alt="NGO Logo" className="w-200 h-200 mx-auto lg:mx-0" />
                        </div>
                        {/* Right side: Sign up for Newsletter */}
                        <div className="text-center lg:text-right">
                            <p className="mb-2">Sign up for Newsletter</p>
                            {/* Newsletter signup form */}
                            <form className="flex justify-center lg:justify-end">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="border py-2 px-3 rounded-md mr-2"
                                />
                                <button className="bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* Bottom: Copyright */}
                    <p className="text-center text-xs mt-4">&copy; 2023 Your NGO. All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default HomePage;
