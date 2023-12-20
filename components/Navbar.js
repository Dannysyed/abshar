'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import absharlogo from '../public/images/AbhsarLogo.png';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isBread, setIsBread] = useState(false);

    const menuItems = [
        {
            href: '/',
            title: 'Membership',
        },
        {
            href: '/gallery',
            title: 'Gallery',
        },
        {
            href: '/about',
            title: 'About Us',
        },
        {
            href: '/contact',
            title: 'Contact Us',
        },
    ];

    const toggleMobileMenu = () => {
        setIsMobile(prevState => !prevState);
        setIsBread(false); // Close mobile menu when toggling
    };

    return (
        <nav className='flex p-7  text-black justify-between items-center flex-col sm:flex-row gap-4 md:gap-12 box_shadow'>
            <div className='flex justify-between items-center'>
                <h2 className='text-[1.4rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.4rem]'>
                    <Link href={'/'}>
                        <Image src={absharlogo} alt='logo' height={50} />
                    </Link>
                </h2>
                {/* Mobile Navigation */}
                <div className='sm:hidden'>
                    {!isBread ? (
                        <Bars3Icon className='h-4 w-4 mx-2 self-end' onClick={toggleMobileMenu} />
                    ) : (
                        <XMarkIcon className='h-4 w-4 mx-2 self-end' onClick={toggleMobileMenu} />
                    )}
                </div>
            </div>
            {/* Desktop Navbar */}
            <ul className={`hidden sm:flex gap-4 md:gap-4 lg:gap-12 ${isMobile ? 'hidden' : 'flex'}`}>
                {menuItems.map(({ href, title }) => (
                    <li key={title}>
                        <Link href={href} className='text-black hover:text-slate-200 font-bold hover:bg-slate-700 cursor-pointer'>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* Mobile Crumbread */}
            <div className={`sm:hidden ${isBread ? 'block' : 'hidden'}`}>
                <ul className='flex gap-4'>
                    {menuItems.map(({ href, title }) => (
                        <li key={title}>
                            <Link href={href} className='text-slate-300 hover:text-slate-200 hover:bg-slate-700'>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Donate Now Button */}
            <div>
                <Link href='/donate'>
                    <button className='primary_color text-white font-semibold py-2 px-4 rounded-md shadow-sm hover:bg-primary_color hover:text-white transition duration-300 ease-in-out'>
                        Donate Now
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
