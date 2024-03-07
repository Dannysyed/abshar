// pages/events.js
'use client'
import React, { useState, useEffect } from 'react';
import EventCard from '../../../components/EventCard';
import NewEventForm from '../../../components/NewEventForm';
import { isPast } from 'date-fns';
import imagess from '../../../public/images/classroom.jpg';

const EventsPage = () => {
    const [eventsData, setEventsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false); // Simulate admin check

    useEffect(() => {
        // Simulate fetching data from an API
        setTimeout(() => {
            try {
                const allEvents = [
                    {
                        id: 1,
                        title: 'Event 1',
                        date: '2023-12-15',
                        location: 'City A',
                        image: imagess,
                    },
                    {
                        id: 2,
                        title: 'Event 2',
                        date: '2023-12-20',
                        location: 'City B',
                        image: imagess,
                    },
                    {
                        id: 3,
                        title: 'Event 3',
                        date: '2024-01-10',
                        location: 'City C',
                        image: imagess,
                    },
                ];

                // Filter events to include only past events
                const pastEvents = allEvents.filter(event => isPast(new Date(event.date)));

                setEventsData(pastEvents);
                setLoading(false);
            } catch (err) {
                setError('Failed to load events');
                setLoading(false);
            }
        }, 1000);

        // Simulate checking if the user is an admin
        // In a real application, you would check the user's role from your authentication system
        setIsAdmin(false); // Set to true if the user is an admin
    }, []);

    const handleCreateEvent = (newEventData) => {
        // Handle event creation logic here
        console.log(newEventData);
    };

    return (
        <div title="Events That Have Happened">
            <div className="container mx-auto py-12">
                <h1 className="text-3xl font-bold mb-8 text-center">Past Events</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : eventsData.length === 0 ? (
                    <p>No events have happened yet.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {eventsData.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                )}
                {isAdmin && <NewEventForm onSubmit={handleCreateEvent} />}
            </div>
        </div>
    );
};

export default EventsPage;
