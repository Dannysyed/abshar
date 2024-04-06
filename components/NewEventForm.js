import React, { useEffect, useState } from 'react';
import { FaGrinHearts } from 'react-icons/fa';
import { Oval } from 'react-loader-spinner';
import ReactModal from 'react-modal';
import { toast } from 'react-toastify';
import baseUrl from '../config/util'
const NewEventForm = ({ isOpen, handleClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        description: '',
        location: '',
        image: null
    });
    const [loading, setLoading] = useState(false);
    const [toastMessage, setToastMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({ ...formData, [name]: files ? files[0] : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const eventData = new FormData();
        eventData.append('title', formData.title);
        eventData.append('date', formData.date);
        eventData.append('description', formData.description);
        eventData.append('location', formData.location);
        if (formData.image) {
            eventData.append('image', formData.image);
        }

        try {
            const response = await fetch(`${baseUrl}/upload`, {
                method: 'POST',
                body: eventData,
            });
            if (!response.ok) {
                throw new Error('Failed to upload image');
            }
            const data = await response.json();
            console.log('Event created:', data);
            setToastMessage('Event created successfully');
            setTimeout(() => {
                window.location.reload()
            }, 2000);

        } catch (error) {
            console.error('Error creating event:', error);
            setToastMessage('Failed to create event. Please try again later.');
        } finally {
            setLoading(false);
            handleClose(); // Close the modal regardless of success or error
        }
    };

    useEffect(() => {
        if (toastMessage) {
            toast.success(toastMessage);
            setToastMessage(null); // Reset the toast message
        }
    }, [toastMessage]);

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={handleClose}
            contentLabel="Image Modal"
            ariaHideApp={false}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    zIndex: 9999,
                },
                content: {
                    top: '85%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    height: '80vh',
                    maxWidth: '1000px', // Set a max-width for larger screens
                    margin: 'auto',
                    borderRadius: '8px',
                    padding: '20px',
                    border: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    overflow: 'auto',
                },
            }}
        >
            <form onSubmit={handleSubmit} className="w-full">
                <h2 className="text-3xl font-bold mb-6">Create New Event</h2>
                <div className="mb-4">
                    <label htmlFor="title" className="block mb-2">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="date" className="block mb-2">Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block mb-2">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block mb-2">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block mb-2">Event Image</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                        accept="image/*"
                        required
                    />
                </div>
                <button type="submit" className="primary_button2 text-white font-bold py-2 px-4 rounded w-full">
                    {loading ? <Oval
                        height="30" width="100" color="white"
                    /> : 'Create Event'}
                </button>
            </form>
        </ReactModal>
    );
};

export default NewEventForm;
