// pages/events/[id].js
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import imass from "../../../../public/images/classroom.jpg"
import Image from 'next/image';
const EventDetailPage = ({ params }) => {


    const event = {
        id: params.id,
        title: 'Sample Event',
        date: '2024-01-15',
        location: 'Sample City',
        image: 'https://example.com/event-image.jpg',
        description: 'This is a sample event description.',
        schedule: [
            { time: '10:00 AM', activity: 'Opening Ceremony' },
            { time: '11:00 AM', activity: 'Keynote Speech' },
            { time: '12:00 PM', activity: 'Lunch Break' },
        ],
    };

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
                <Image src={imass} alt={event.title} className="w-full md:w-1/2 object-cover rounded-md mb-4 md:mb-0 md:mr-8" />
                <div className="flex-1">
                    <p><strong>Date:</strong> {event.date}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                    <p className="mt-4">{event.description}</p>
                    <h2 className="text-2xl font-semibold mt-6">Schedule</h2>
                    <ul className="list-disc ml-4 mt-2">
                        {event.schedule.map((item, index) => (
                            <li key={index}><strong>{item.time}:</strong> {item.activity}</li>
                        ))}
                    </ul>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-6">
                        Register for Event
                    </button>
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Share this Event</h2>
                {/* Placeholder for social sharing buttons */}
                <div className="mt-2">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                        Facebook
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
                        Twitter
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                        LinkedIn
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventDetailPage;
