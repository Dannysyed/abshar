import Image from 'next/image';
import React from 'react'
import absharlogo from '../public/images/AbhsarLogo.png'
import { FiMousePointer, FiFacebook, FiInstagram, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
const Footer = () => {
    return (
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
            <p className="text-center text-xs mt-4">&copy; 2023 Abshar. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer