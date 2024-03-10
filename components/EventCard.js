import Link from 'next/link';
import React from 'react';
import { format, isPast } from 'date-fns';
import Image from 'next/image';

const EventCard = ({ event }) => {
    // Determine if the event is in the past
    const isEventPast = isPast(new Date(event.date));

    // Format the event date
    const formattedDate = format(new Date(event.date), 'MMMM d, yyyy');

    return (
        <div
            className={`border p-6 rounded-md shadow-lg transition-transform ${isEventPast ? 'bg-gray-200' : 'bg-white'
                } hover:scale-105 hover:shadow-xl`}
        >
            {event.imageUrl && (
                <Image
                    src={event.imageUrl}
                    // alt={event.title}
                    width={100}
                    height={100}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
            )}
            <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
            <p>Date: {formattedDate}</p>
            <p>Location: {event.location}</p>
            {event.category && (
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
                    {event.category}
                </span>
            )}
            <div className="mt-4 flex justify-between items-center">
                <Link href={`/events/${event._id}`}>
                    <p className="primary_button2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                        Learn More
                    </p>
                </Link>
                <Link href={`/events/${event._id}`}>
                    <p className="text-blue-500 hover:underline">View Details</p>
                </Link>
            </div>
        </div>
    );
};

export default EventCard;
