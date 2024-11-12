import React from 'react';
import './TicketCard.css';
import { ReactComponent as InProgressIcon } from '../icons/in-progress.svg';
import { ReactComponent as TodoIcon } from '../icons/To-do.svg';
import { ReactComponent as BacklogIcon } from '../icons/Backlog.svg';
import { ReactComponent as CancelledIcon } from '../icons/Cancelled.svg';
import { ReactComponent as DoneIcon } from '../icons/Done.svg';

import { ReactComponent as UrgentPriorityIcon } from '../icons/SVG - Urgent Priority grey.svg';
import { ReactComponent as HighPriorityIcon} from '../icons/Img - High Priority.svg';
import { ReactComponent as MediumPriorityIcon} from '../icons/Img - Medium Priority.svg';
import { ReactComponent as LowPriorityIcon} from '../icons/Img - Low Priority.svg';
import { ReactComponent as NoPriorityIcon} from '../icons/No-priority.svg';



const statusIcons = {
    "In progress": <InProgressIcon />,
    "Todo": <TodoIcon />,
    "Backlog": <BacklogIcon />,
    "Cancelled": <CancelledIcon />,
    "Done": <DoneIcon />
};

const priorityIcons = {
    4: <UrgentPriorityIcon />,
    3: <HighPriorityIcon />,
    2: <MediumPriorityIcon />,
    1: <LowPriorityIcon />,
    0: <NoPriorityIcon />
};



const TicketCard = ({ id, title, status, priority, tags, user}) => {
    

    const nameParts = user && user.name ? user.name.split(" ") : ["U"];
    const initials = nameParts.length > 1
        ? nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase()
        : nameParts[0].charAt(0).toUpperCase();
    const availabilityColor = user && user.available ? 'yellow' : 'grey';
    const statusIcon = statusIcons[status] || null;
    const priorityIcon = priorityIcons[priority] || null;

    return (
        <div className="ticket-card">
            <div className="ticket-header">
                <span className="ticket-id">{id}</span>
                {user && (
                    <div className="user-avatar-container">
                        <div className="user-avatar">
                            {initials}
                            <span className={`availability-indicator ${availabilityColor}`}></span>
                        </div>
                    </div>
                )}
            </div>
            <div className="ticket-title-container">
                <span className="status-icon">{statusIcon}</span>
                <h3 className="ticket-title">{title}</h3>
            </div>
            <div className="ticket-details">
                <span className="priority-icon">{priorityIcon}</span>
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TicketCard;
