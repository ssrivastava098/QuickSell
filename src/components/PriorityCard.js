import React from 'react';
import './PriorityCard.css';
import { ReactComponent as AddIcon } from '../icons/add.svg';
import { ReactComponent as ThreeIcon } from '../icons/3 dot menu.svg';

import { ReactComponent as UrgentPriorityIcon } from '../icons/SVG - Urgent Priority colour.svg';
import { ReactComponent as HighPriorityIcon} from '../icons/Img - High Priority.svg';
import { ReactComponent as MediumPriorityIcon} from '../icons/Img - Medium Priority.svg';
import { ReactComponent as LowPriorityIcon} from '../icons/Img - Low Priority.svg';
import { ReactComponent as NoPriorityIcon} from '../icons/No-priority.svg';

const PriorityCard = ({ priority, count }) => {
    const priorityIcons = {
        4: <UrgentPriorityIcon />,
        3: <HighPriorityIcon />,
        2: <MediumPriorityIcon />,
        1: <LowPriorityIcon />,
        0: <NoPriorityIcon />
    };

    const icon = priorityIcons[priority.level];
    const label = priority.name;

    return (
        <div className="priority-card">
            <div className="priority-card-content">
                <span className="priority-icon">{icon}</span>
                <span className="priority-title">{label}</span>
                <span className="ticket-count">{count}</span>
            </div>
            <div className="priority-actions">
                <AddIcon />
                <ThreeIcon />
            </div>
        </div>
    );
};

export default PriorityCard;
