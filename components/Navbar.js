'use client'
import Link from 'next/link'
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import absharlogo from '../public/images/AbhsarLogo.png'

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isBread, setIsBread] = useState(false);

    const menuItems = [
        {
            href: "/",
            title: "Membership",
        },


        {
            href: "/gallery",
            title: "Gallery",
        },
        {
            href: "/about",
            title: "About Us",
        },
        {
            href: "/contact",
            title: "Contact Us",
        },
    ];

    return (
        <nav className='flex p-7  border_use text-black  justify-around flex-col  text-center sm:flex-row gap-4 md:gap-12'>
            <div className='flex justify-between items-center '>
                <h2 className='text-[1.4rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.4rem]'>
                    <Link href={'/ '}>
                        <Image src={absharlogo} alt='logo' height={50} />
                    </Link>
                </h2>
                {/* Mobile Navigation */}
                {!isBread ?
                    <Bars3Icon className="h-4 w-4 mx-2 self-end sm:hidden" onClick={() => { setIsBread(prev => !prev) }} />
                    :
                    <XMarkIcon className="h-4 w-4 mx-2 self-end sm:hidden" onClick={() => { setIsBread(prev => !prev) }} />
                }
            </div>
            {/* Desktop Navbar */}
            <div className='hidden sm:flex '>
                <ul className="flex gap-5 flex-col items-center sm:flex-row sm:gap-4 md:gap-4 lg:gap-12">
                    {menuItems.map(({ href, title }) => (
                        <li key={title}>
                            <Link href={href} className={`text-black hover:text-slate-200 font-bold hover:bg-slate-700 cursor-pointer`}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Mobile Crumbread */}
            {
                isBread && <div className='sm:hidden'>
                    <ul className="flex gap-5 flex-col items-center sm:flex-row">
                        {menuItems.map(({ href, title }) => (
                            <li key={title}>
                                <Link href={href} className={`text-slate-300 hover:text-slate-200 hover:bg-slate-700`}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            }
            {/* Donate Now Button */}
            <div>
                <Link href="/donate">
                    <button className="primary_color text-white font-semibold py-2 px-4 rounded-md shadow-sm hover:bg-primary_color hover:text-white transition duration-300 ease-in-out">
                        Donate Now
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;
