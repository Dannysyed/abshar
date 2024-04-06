'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import absharlogo from '../public/images/AbhsarLogo.png';
import { FiFacebook, FiInstagram, FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';
import { toast } from 'react-toastify';


const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://abshar-backend.onrender.com/subscribe', {
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
                toast.warn('Error occured Please try again')
                const errorData = await response.json();
                throw new Error(errorData.message);

            }
        } catch (error) {
            console.error('Subscription error:', error);
            toast.error(error);
            // Handle the error (e.g., show an error message to the user)
        }
    };


    return (
        <footer className="bg-gray-100 py-10 rounded-xl">
            <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-6 lg:space-y-0">
                {/* Left side: Contact, Address, Mail, Socials */}
                <div className="lg:pr-8 space-y-2">
                    <p>Contact: +91 8899037321</p>
                    <p>Address: Uri, Kashmir</p>
                    <p>Email: abshartrust2021@gmail.com</p>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/abshar_trust" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-200"><FiFacebook size={24} /></a>
                        <a href="https://www.instagram.com/abshar_trust" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors duration-200"><FiInstagram size={24} /></a>
                        <a href="https://twitter.com/abshartrust?lang=en" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200"><FiTwitter size={24} /></a>
                        <a href="https://www.linkedin.com/company/aabshar-source-of-humanity/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-200"><FiLinkedin size={24} /></a>
                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors duration-200"><FiGithub size={24} /></a>
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
        </footer>
    );
};

export default Footer;
