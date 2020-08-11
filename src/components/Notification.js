import React from 'react'

const Notification = ({ showNotif }) => {
    return (
        <div className={`notification-container ${showNotif ? 'show' : ''}`}>
            <p>You have already entered this letter</p>
        </div>
    )
}

export default Notification
