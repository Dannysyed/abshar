'use client';
import { Hearts } from 'react-loader-spinner';
import React, { useState, useEffect } from 'react';
import EventCard from '../../../components/EventCard';
import NewEventForm from '../../../components/NewEventForm';
import { FaPlus } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import baseUrl from '../../../config/util'
const EventsPage = () => {
    const [eventsData, setEventsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false); // Simulate admin check
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [adminCode, setAdminCode] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage] = useState(6);
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(`${baseUrl}/events`); // Assuming you have an Express route to fetch events
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
        // Set to true if the user is an admin
    }, []);

    const handleCreateEvent = (newEventData) => {
        console.log(newEventData);
        setIsModalOpen(false); // Close the modal after creating the event
    };

    const verifyAdmin = () => {
        if (adminCode === 'Aamir123@') { // Replace 'secretCode' with your actual admin code
            setIsAdmin(true);
        } else {
            toast.warn('Incorrect admin code');
        }
    };
    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = eventsData.slice(indexOfFirstEvent, indexOfLastEvent);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto px-4 py-12">
            <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
                <h1 className="text-3xl font-bold mb-4 md:mb-0">Past Events</h1>

                {isAdmin ? (
                    <button
                        className="primary_button2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <FaPlus className="mr-2" />
                        Create Event
                    </button>
                ) : (
                    <div className="flex items-center">
                        <input
                            type="password"
                            placeholder="Enter admin code"
                            value={adminCode}
                            onChange={(e) => setAdminCode(e.target.value)}
                            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <button onClick={verifyAdmin} className="ml-2 primary_button2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">Verify</button>
                    </div>
                )}
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-full">
                    <Hearts height="100" width="100" color="#4fa94d" ariaLabel="hearts-loading" />
                </div>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : currentEvents.length === 0 ? (
                <p>No events have happened yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentEvents.map((event) => (
                        <EventCard key={event._id} event={event} />
                    ))}
                </div>
            )}

            <div className="flex justify-center mt-8 space-x-2">
                {[...Array(Math.ceil(eventsData.length / eventsPerPage)).keys()].map(number => (
                    <button
                        key={number + 1}
                        onClick={() => paginate(number + 1)}
                        className={`px-4 py-2 border rounded transition duration-300 ${currentPage === number + 1 ? 'primary_button2 text-white' : 'bg-white text-black'}`}
                    >
                        {number + 1}
                    </button>
                ))}
            </div>

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
