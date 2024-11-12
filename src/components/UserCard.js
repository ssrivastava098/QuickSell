import React from 'react';
import './UserCard.css';

const UserCard = ({ user, count }) => {
    // Split the name and get the initials
    const nameParts = user.name.split(" ");
    const initials = nameParts.length > 1
        ? nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase()
        : nameParts[0].charAt(0).toUpperCase(); 

    const availabilityColor = user.available ? 'yellow' : 'grey';

    return (
        <div className="user-card">
            <div className="user-card-content">
                <div className="user-avatar">
                    {initials}
                    <span className={`availability-indicator ${availabilityColor}`}></span>
                </div>
                <span className="user-name">{user.name}</span>
                <span className="ticket-count">{count}</span>
            </div>
            <div className="user-actions">
                <button className="add-button">+</button>
                <button className="more-options">•••</button>
            </div>
        </div>
    );
};

export default UserCard;
