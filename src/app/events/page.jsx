'use client'
import { Hearts } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react';
import EventCard from '../../../components/EventCard';
import NewEventForm from '../../../components/NewEventForm';
import { isPast } from 'date-fns';
import Modal from 'react-modal';
import imagess from '../../../public/images/classroom.jpg';
import { FaBeer, FaPlus } from "react-icons/fa";

const EventsPage = () => {
    const [eventsData, setEventsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false); // Simulate admin check
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('https://abshar-backend.onrender.com/events'); // Assuming you have an Express route to fetch events
                if (!response.ok) {
                    throw new Error('Failed to fetch events');
                }
                const events = await response.json();
                setEventsData(events);
                setLoading(false);
            } catch (err) {
                setError(err.message || 'Failed to load events');
                setLoading(false);
            }
        };

        fetchEvents();

        // Simulate checking if the user is an admin
        // In a real application, you would check the user's role from your authentication system
        setIsAdmin(true); // Set to true if the user is an admin
    }, []);


    const handleCreateEvent = (newEventData) => {
        // Handle event creation logic here
        console.log(newEventData);
        setIsModalOpen(false); // Close the modal after creating the event
    };
    return (
        <div >
            <div className="container mx-auto py-12">

                <div>
                    <h1 className="text-3xl font-bold mb-8 text-center">Past Events</h1>
                    <FaPlus onClick={() => setIsModalOpen(true)} >
                        Create New Event
                    </FaPlus>

                </div>


                {loading ? (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Hearts
                            height="100"
                            width="100"
                            color="#4fa94d"
                            ariaLabel="hearts-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : eventsData.length === 0 ? (
                    <p>No events have happened yet.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {eventsData.map((event) => (
                            <EventCard key={event._id} event={event} />
                        ))}
                    </div>
                )}

                {isAdmin && (
                    <div>

                        <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="modal" overlayClassName="overlay">
                            <NewEventForm onSubmit={handleCreateEvent} isOpen={isModalOpen} handleClose={handleCreateEvent} />
                        </Modal>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventsPage;
