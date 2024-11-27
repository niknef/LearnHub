import React from 'react';

const Notification = ({ type, message, onClose }) => {
    const notificationStyles = {
        success: "alert alert-success alert-dismissible fade show",
        error: "alert alert-danger alert-dismissible fade show",
    };

    return (
        <div className={notificationStyles[type]} role="alert">
            {message}
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
        </div>
    );
};

export default Notification;
