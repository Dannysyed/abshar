'use client'
import { useState, useEffect, useRef } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import absharlogo from '../public/images/AbhsarLogo.png';
import { FiActivity } from 'react-icons/fi';
import Link from 'next/link'
const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isBread, setIsBread] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const navRef = useRef();

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

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <nav
            ref={navRef}
            className={`flex p-7 text-black justify-between items-center flex-col sm:flex-row z-50 gap-4 md:gap-12 box_shadow body_color ${visible ? 'sticky top-0' : '-top-24'
                }`}
        >
            <div className='flex justify-between w-full sm:w-auto items-center'>
                <h2 className='text-[1.4rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.4rem]'>
                    <Link href='/'>
                        <Image src={absharlogo} alt='logo' height={50} />
                    </Link>
                </h2>
                {/* Mobile Navigation */}
                {!isBread ? (
                    <Bars3Icon
                        className='h-8 w-8 mx-2 sm:hidden'
                        onClick={() => setIsBread((prev) => !prev)}
                    />
                ) : (
                    <XMarkIcon
                        className='h-8 w-8 mx-2 sm:hidden'
                        onClick={() => setIsBread((prev) => !prev)}
                    />
                )}
            </div>
            {/* Desktop Navbar */}
            <ul className='hidden sm:flex gap-5 flex-col items-center sm:flex-row sm:gap-4 md:gap-4 lg:gap-12'>
                {menuItems.map(({ href, title }) => (
                    <li key={title}>
                        <Link href={href} className='text-black hover:text-slate-200 font-bold hover:cursor-pointer decoration-transparent'>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* Mobile Crumbread */}
            {isBread && (
                <div className='sm:hidden'>
                    <ul className='flex gap-5 flex-col items-center sm:flex-row'>
                        {menuItems.map(({ href, title }) => (
                            <li key={title}>
                                <Link href={href} className='text-black hover:text-white decoration-transparent'>
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {/* Donate Now Button */}
            <div className='flex justify-center sm:block'>
                <button
                    className={`
            px-4 py-2 rounded-full 
            flex items-center gap-2 
            text-slate-500
            shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
            transition-all
            hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
            hover:text-green-800
          `}
                >
                    <FiActivity />
                    <span>Donate Now</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
