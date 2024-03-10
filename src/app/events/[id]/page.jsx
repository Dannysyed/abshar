'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Hearts } from 'react-loader-spinner'
import Image from 'next/image';
import { format } from 'date-fns';
import { shareEvent } from '../../../../components/shareEvent';
// import { shareEvent } from '../utils/shareEvent'; // Assuming you have a utility function for sharing

const EventDetailPage = ({ params }) => {
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch(`https://abshar-backend.onrender.com/events/${params.id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch event');
                }
                const eventData = await response.json();
                setEvent(eventData);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch event');
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
        <div className="container mx-auto py-12">
            <nav className="mb-8">
                <ul className="flex">
                    <li>
                        <Link href="/events">
                            <p className="text-blue-500 hover:underline">Events</p>
                        </Link>
                    </li>
                    <li className="mx-2">/</li>
                    <li>{event.title}</li>
                </ul>
            </nav>
            <h1 className="text-3xl font-bold mb-8">Event Details - {event.title}</h1>
            <div className="flex flex-col md:flex-row">
                {event.imageUrl && (
                    <Image src={event.imageUrl} alt={event.title} className="w-full md:w-1/2 object-cover rounded-md mb-4 md:mb-0 md:mr-8" width={100} height={100} />
                )}
                <div className="flex-1">
                    <p><strong>Date:</strong> {event.date}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                    <p className="mt-4">{event.description}</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-6">
                        Register for Event
                    </button>
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Share this Event</h2>
                <div className="mt-2">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={() => shareEvent(event, 'facebook')}>
                        Facebook
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4" onClick={() => shareEvent(event, 'twitter')}>
                        Twitter
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={() => shareEvent(event, 'linkedin')}>
                        LinkedIn
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventDetailPage;
