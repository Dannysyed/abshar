// ImageModal.js
import ReactModal from 'react-modal';
import imageUrld from '../public/images/Donation.jpeg'
import Image from 'next/image';
import { FiX } from 'react-icons/fi';
const ImageModal = ({ isOpen, handleClose }) => {
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
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    maxWidth: '800px',
                    maxHeight: '90vh',
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
            <Image src={imageUrld} alt="Modal" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            <button onClick={handleClose} style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 9999 }}>
                <FiX size={20} />
            </button>
        </ReactModal>
    );
};

export default ImageModal;
