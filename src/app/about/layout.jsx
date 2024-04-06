import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const layout = ({ children }) => {
    return (
        <>
            <div>{children}</div>
            <ToastContainer />
        </>
    )
}

export default layout