// components/NewEventForm.js
import React, { useState } from 'react';
import ReactModal from 'react-modal';

const NewEventForm = ({ isOpen, handleClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        description: '',
        location: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({ ...formData, [name]: files ? files[0] : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const eventData = new FormData();
        eventData.append('title', formData.title);
        eventData.append('date', formData.date);
        eventData.append('description', formData.description);
        eventData.append('location', formData.location);
        if (formData.image) {
            eventData.append('image', formData.image);
        }

        try {
            const response = await fetch('https://abshar-backend.onrender.com/upload', {
                method: 'POST',
                body: eventData,
            });
            if (!response.ok) {
                throw new Error('Failed to upload image');
            }
            const data = await response.json();
            console.log('Event created:', data);
            // Optionally, you can redirect the user to a different page or show a success message
        } catch (error) {
            console.error('Error creating event:', error);
            // Handle error, show error message, etc.
        }
    };

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
                    top: '90%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    height: '85%',
                    // maxWidth: '800px',
                    // maxHeight: '90vh',
                    margin: 'auto',
                    borderRadius: '8px',
                    padding: '0',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                },
            }}
        >


            <form onSubmit={handleSubmit} className="container mx-auto py-12">
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
                <button type="submit" className="primary_button2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Create Event
                </button>
            </form>
        </ReactModal>
    );
};

export default NewEventForm;
