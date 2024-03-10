'use client';
import { Hearts } from 'react-loader-spinner';
import React, { useState, useEffect } from 'react';
import EventCard from '../../../components/EventCard';
import NewEventForm from '../../../components/NewEventForm';
import { FaPlus } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

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
                setEventsData(events.reverse());
            } catch (err) {
                setError(err.message || 'Failed to load events');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
        setIsAdmin(true); // Set to true if the user is an admin
    }, []);

    const handleCreateEvent = (newEventData) => {
        console.log(newEventData);
        setIsModalOpen(false); // Close the modal after creating the event
    };

    return (
        <div className="container mx-auto py-12">
            <div className='flex justify-between items-center mb-8'>
                <h1 className="text-3xl font-bold">Past Events</h1>
                {isAdmin && (
                    <button
                        className="mx-2"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <FaPlus className="inline mr-2" />

                    </button>
                )}
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-full">
                    <Hearts height="100" width="100" color="#4fa94d" ariaLabel="hearts-loading" />
                </div>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : eventsData.length === 0 ? (
                <p>No events have happened yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventsData.map((event) => (
                        <EventCard key={event._id} event={event} />
                    ))}
                </div>
            )}

            {isAdmin && (
                <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="modal" overlayClassName="overlay">
                    <NewEventForm onSubmit={handleCreateEvent} isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} />
                </Modal>
            )}

            <ToastContainer />
        </div>
    );
};

export default EventsPage;
