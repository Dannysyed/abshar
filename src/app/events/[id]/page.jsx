'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Hearts } from 'react-loader-spinner';
import Image from 'next/image';
import { FaCalendarAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import baseUrl from '../../../../config/util';
import { format } from 'date-fns';
import { shareEvent } from '../../../../components/shareEvent';
import Head from 'next/head';

const EventDetailPage = ({ params }) => {
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch(`${baseUrl}/events/${params.id}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch event: ${response.statusText}`);
                }
                const eventData = await response.json();
                setEvent(eventData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            fetchEvent();
        }
    }, [params.id]);

    if (loading) return <div className="flex justify-center items-center">
        <Hearts height="100" width="100" color="#4fa94d" ariaLabel="hearts-loading" />
    </div>;
    if (error) return <p>Error: {error}</p>;
    if (!event) return null;

    return (
        <>
            <Head>
                <title>{event.title} - Event Details</title>
                <meta name="description" content={event.description} />
            </Head>
            <div className="container mx-auto py-12 px-4">
                <nav className="mb-8">
                    <ul className="flex text-sm md:text-base">
                        <li>
                            <Link href="/events">
                                <p className="text-blue-500 hover:underline">Events</p>
                            </Link>
                        </li>
                        <li className="mx-2">/</li>
                        <li>{event.title}</li>
                    </ul>
                </nav>
                <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">{event.title}</h1>
                <div className="flex flex-col md:flex-row">
                    {event.imageUrl && (
                        <div className="w-full md:w-1/2 lg:w-2/5 mb-6 md:mb-0 md:mr-8">
                            <Image src={event.imageUrl} alt={event.title} className="object-cover rounded-md shadow-lg" layout="responsive" width={500} height={300} />
                        </div>
                    )}
                    <div className="flex-1">
                        <p className="flex items-center text-lg mb-2">
                            <FaCalendarAlt className="mr-2" />
                            <strong>Date:</strong> {format(new Date(event.date), 'MMMM d, yyyy')}
                        </p>
                        <p className="flex items-center text-lg mb-4">
                            <FaMapMarkerAlt className="mr-2" />
                            <strong>Location:</strong> {event.location}
                        </p>
                        <p className="text-lg mb-4">{event.description}</p>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
                            <p><strong>Organizer:</strong> Abshar</p>

                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">Share this Event</h2>
                    <div className="flex gap-2">
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l flex items-center" onClick={() => shareEvent(event, 'facebook')}>
                            <FaFacebookF className="mr-2" /> Facebook
                        </button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 flex items-center" onClick={() => shareEvent(event, 'twitter')}>
                            <FaTwitter className="mr-2" /> Twitter
                        </button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r flex items-center" onClick={() => shareEvent(event, 'linkedin')}>
                            <FaLinkedinIn className="mr-2" /> LinkedIn
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventDetailPage;
