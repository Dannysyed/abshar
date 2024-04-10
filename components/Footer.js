'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import absharlogo from '../public/images/AbhsarLogo.png';
import partner1 from '../public/images/partner1.jpeg';
import partner2 from '../public/images/partner2.jpeg';
import partner3 from '../public/images/partner3.jpeg';

import { FiFacebook, FiInstagram, FiTwitter, FiGithub, FiLinkedin, FiPhone, FiMail } from 'react-icons/fi';
import { toast } from 'react-toastify';
import baseUrl from '../config/util';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${baseUrl}/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                toast.success('Thank you for subscribing!')
                setEmail('');
                setIsSubscribed(true);

            } else {
                toast.warn('Error occurred. Please try again.')
                const errorData = await response.json();
                throw new Error(errorData.message);

            }
        } catch (error) {
            console.error('Subscription error:', error);
            toast.error(error.message);
        }
    };

    return (
        <footer className="bg-gray-100 py-10 rounded-xl">
            <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Left side: Contact, Address, Mail, Socials */}
                <div className="lg:pr-8 space-y-3 ">
                    <p>Contact: +91 8899037321</p>
                    <p>Address: Uri, Kashmir</p>
                    <p className='mb-3'>Email: abshartrust2021@gmail.com</p>
                    <div className="flex gap-9 justify-start">
                        <a href="tel:+918899037321" className="hover:text-blue-500 transition-colors duration-200"><FiPhone size={24} /></a>
                        <a href="mailto:abshartrust2021@gmail.com" className="hover:text-blue-500 transition-colors duration-200"><FiMail size={24} /></a>
                        <a href="https://www.instagram.com/abshar_trust" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors duration-200"><FiInstagram size={24} /></a>
                        <a href="https://twitter.com/abshartrust?lang=en" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200"><FiTwitter size={24} /></a>
                        <a href="https://www.linkedin.com/company/aabshar-source-of-humanity/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-200"><FiLinkedin size={24} /></a>


                    </div>
                    {/* Partner Images */}
                    <div className="flex justify-start lg:justify-start mt-4 space-x-4">
                        <div className="flex items-center ">
                            <p className="font-bold text-lg my-2">Our Partners:</p>

                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="relative group">
                                <div className="rounded-full overflow-hidden border border-gray-300">
                                    <Image src={partner1} alt="Partner 1" width={30} height={30} />
                                </div>
                                <span className="absolute bg-gray-800 text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 group-hover:block hidden">Partner 1</span>
                            </div>
                            <div className="relative group">
                                <div className="rounded-full overflow-hidden border border-gray-300">
                                    <Image src={partner2} alt="Partner 2" width={30} height={30} />
                                </div>
                                <span className="absolute bg-gray-800 text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 group-hover:block hidden">Partner 2</span>
                            </div>
                            <div className="relative group">
                                <div className="rounded-full overflow-hidden border border-gray-300">
                                    <Image src={partner3} alt="Partner 2" width={30} height={30} />
                                </div>
                                <span className="absolute bg-gray-800 text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 group-hover:block hidden">Partner 3</span>
                            </div>
                            {/* Add more partner images as needed */}
                        </div>
                    </div>


                </div>
                {/* Center: Logo */}
                <div className="flex justify-center lg:justify-start">
                    <Image src={absharlogo} alt="NGO Logo" width={100} height={100} />
                </div>
                {/* Right side: Sign up for Newsletter */}
                <div className="text-center lg:text-right space-y-2">
                    <p>Sign up for our Newsletter</p>
                    <form className="flex justify-center lg:justify-end" onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="border py-2 px-3 rounded-md mr-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                            disabled={isSubscribed}
                        >
                            {isSubscribed ? 'Subscribed' : 'Subscribe'}
                        </button>
                    </form>
                    {isSubscribed && <p className="text-sm mt-2 text-green-600">Thank you for subscribing!</p>}
                </div>
            </div>
            {/* Bottom: Copyright */}
            <p className="text-center text-xs mt-6">&copy; 2023 Abshar. All Rights Reserved.</p>
        </footer >
    );
};

export default Footer;
