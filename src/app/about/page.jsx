'use client';
import React from 'react';
import Lottie from "lottie-react";
import Image from 'next/image';
import teamAni from '../../../public/images/Animation - 1team.json';
import founderPic from '../../../public/images/AbhsarLogo.png';
import missionIcon from '../../../public/icons/partners.png';
import visionIcon from '../../../public/icons/partners.png';
import valuesIcon from '../../../public/icons/partners.png';

const AboutPage = () => {
    return (
        <div className='body_color'>
            <section className='container mx-auto py-12 px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                    <div className='text-center md:text-left'>
                        <h1 className='text-4xl font-bold mb-4 text-green-600'>About Abshar</h1>
                        <p className='text-lg mb-6'>
                            Abshar is a non-profit organization committed to making a difference in the lives of underprivileged communities. We believe in the power of unity and strive to bring people together to create a positive impact.
                        </p>
                        <p className='text-lg'>
                            Since our inception in 2021, we have been dedicated to providing education, healthcare, and support to those in need. Our team is made up of passionate individuals who are driven by the desire to make a change.
                        </p>
                    </div>
                    <div className='basis-2/5'>
                        <Lottie animationData={teamAni} loop={true} className='h-[50vh] sm:h-[70vh] mx-auto' />
                    </div>
                </div>
            </section>
            <section className='bg-gray-100 py-12 px-4'>
                <div className='container mx-auto'>
                    <div className='text-center'>
                        <h2 className='text-3xl font-bold mb-6'>Our Mission, Vision, and Values</h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            <div className='p-6 rounded-md bg-white shadow-md hover:scale-105 transition-transform'>
                                <Image src={missionIcon} className='w-20 h-20 mb-4 mx-auto' />
                                <h3 className='text-xl font-semibold mb-4'>Our Mission</h3>
                                <p>
                                    To empower underprivileged communities by providing access to education, healthcare, and support, and to foster a global family through unity and compassion.
                                </p>
                            </div>
                            <div className='p-6 rounded-md bg-white shadow-md hover:scale-105 transition-transform'>
                                <Image src={visionIcon} className='w-20 h-20 mb-4 mx-auto' />
                                <h3 className='text-xl font-semibold mb-4'>Our Vision</h3>
                                <p>
                                    A world where every individual has the opportunity to lead a healthy, educated, and fulfilling life, and where communities thrive through collaboration and mutual support.
                                </p>
                            </div>
                            <div className='p-6 rounded-md bg-white shadow-md hover:scale-105 transition-transform'>
                                <Image src={valuesIcon} className='w-20 h-20 mb-4 mx-auto' />
                                <h3 className='text-xl font-semibold mb-4'>Our Values</h3>
                                <ul className='list-disc list-inside'>
                                    <li>Compassion</li>
                                    <li>Integrity</li>
                                    <li>Inclusivity</li>
                                    <li>Respect</li>
                                    <li>Collaboration</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container mx-auto py-12 px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                    <div className='basis-2/5'>
                        <Image src={founderPic} className='rounded-full mx-auto' width={300} height={300} />
                    </div>
                    <div className='text-center md:text-left'>
                        <h2 className='text-3xl font-bold mb-4'>A Message from Founders</h2>
                        <p className='text-lg mb-6'>
                            "When we started Abshar, the vision was to create an organization that not only addresses immediate needs but also empowers communities to build a better future. We are grateful for the support and dedication of our team and volunteers, who have been instrumental in bringing this vision to life. Together, we will continue to make a difference, one life at a time."
                        </p>
                        <p className='text-lg font-bold'> -Founders of Abshar</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
