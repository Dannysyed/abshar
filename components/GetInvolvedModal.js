// GetInvolvedModal.js
import ReactModal from 'react-modal';
import { FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const GetInvolvedModal = ({ isOpen, handleClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <ReactModal
                    isOpen={isOpen}
                    onRequestClose={handleClose}
                    contentLabel="Get Involved Modal"
                    ariaHideApp={false}
                    closeTimeoutMS={500}
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            zIndex: 9999,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                        content: {
                            position: 'relative',
                            inset: 'auto',
                            margin: 'auto',
                            width: '90%',
                            maxWidth: '600px',
                            maxHeight: '90vh',
                            borderRadius: '16px',
                            padding: '40px',
                            border: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            overflow: 'auto',
                            backgroundColor: '#ffffff',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        },
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-green-600">Get Involved</h2>
                        <p className="mb-6 text-lg text-gray-700">
                            Join us in making a positive impact! Here's how you can get involved:
                        </p>
                        <ul className="list-disc list-inside mb-6 text-lg text-gray-600">
                            <li>Volunteer for our programs</li>
                            <li>Donate to support our initiatives</li>
                            <li>Participate in our events</li>
                            <li>Become a member</li>
                            <li>Follow and share our content on social media</li>
                            <li>Sign up for our newsletter</li>
                            <li>Spread the word about our work</li>
                        </ul>
                        <button
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                            onClick={handleClose}
                        >
                            Close
                        </button>
                    </motion.div>
                    <button
                        onClick={handleClose}
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <FiX size={24} color="#4a5568" />
                    </button>
                </ReactModal>
            )}
        </AnimatePresence>
    );
};

export default GetInvolvedModal;
