import React from 'react';
import './StatusCard.css';

import { ReactComponent as BacklogIcon } from '../icons/Backlog.svg';
import { ReactComponent as TodoIcon } from '../icons/To-do.svg';
import { ReactComponent as InProgressIcon } from '../icons/in-progress.svg';
import { ReactComponent as DoneIcon } from '../icons/Done.svg';
import { ReactComponent as CancelledIcon } from '../icons/Cancelled.svg';
import { ReactComponent as AddIcon } from '../icons/add.svg';
import { ReactComponent as ThreeIcon } from '../icons/3 dot menu.svg';

const StatusCard = ({ status, count }) => {
    const statusIcons = {
        "Backlog": <BacklogIcon />,
        "Todo": <TodoIcon />,
        "In progress": <InProgressIcon />,
        "Done": <DoneIcon />,
        "Cancelled": <CancelledIcon />
    };

    const icon = statusIcons[status] || <span>?</span>; 

    return (
        <div className="status-card">
            <div className="status-card-content">
                <span className="status-icon">{icon}</span>
                <span className="status-title">{status}</span>
                <span className="ticket-count">{count}</span>
            </div>
            <div className="status-actions">
                <AddIcon />
                <ThreeIcon />
            </div>
        </div>
    );
};

export default StatusCard;
