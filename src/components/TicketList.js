import React from 'react';
import TicketCard from './TicketCard';
import StatusCard from './StatusCard';
import PriorityCard from './PriorityCard';
import UserCard from './UserCard';

const TicketList = ({ groupedTickets, viewMode, users }) => {
    const getUserById = (userId) => users.find((u) => u.id === userId) || {};

    const statusList = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
    const priorityLevels = [
        { level: 0, name: "No priority" },
        { level: 4, name: "Urgent" },
        { level: 3, name: "High" },
        { level: 2, name: "Medium" },
        { level: 1, name: "Low" }
    ];

    return (
        <div className="ticket-list-container">
            {viewMode === "status"
                ? statusList.map((status) => (
                    <div key={status} className="ticket-group">
                        <StatusCard
                            status={status}
                            count={groupedTickets[status] ? groupedTickets[status].length : 0}
                        />
                        <div className="ticket-group-items">
                            {groupedTickets[status]?.map((ticket) => (
                                <TicketCard
                                    key={ticket.id}
                                    id={ticket.id}
                                    title={ticket.title}
                                    status={ticket.status}
                                    priority={ticket.priority}
                                    tags={ticket.tag}
                                    user={getUserById(ticket.userId)} 
                                />
                            )) || <></>}
                        </div>
                    </div>
                  ))
                : viewMode === "priority"
                ? priorityLevels.map((priority) => (
                    <div key={priority.level} className="ticket-group">
                        <PriorityCard
                            priority={priority}
                            count={groupedTickets[priority.level] ? groupedTickets[priority.level].length : 0}
                        />
                        <div className="ticket-group-items">
                            {groupedTickets[priority.level]?.map((ticket) => (
                                <TicketCard
                                    key={ticket.id}
                                    id={ticket.id}
                                    title={ticket.title}
                                    status={ticket.status}
                                    priority={ticket.priority}
                                    tags={ticket.tag}
                                    user={getUserById(ticket.userId)} 
                                />
                            )) || <></>}
                        </div>
                    </div>
                  ))
                : viewMode === "user"
                ? users.map((user) => (
                    <div key={user.id} className="ticket-group">
                        <UserCard
                            user={user}
                            count={groupedTickets[user.id] ? groupedTickets[user.id].length : 0}
                        />
                        <div className="ticket-group-items">
                            {groupedTickets[user.id]?.map((ticket) => (
                                <TicketCard
                                    key={ticket.id}
                                    id={ticket.id}
                                    title={ticket.title}
                                    status={ticket.status}
                                    priority={ticket.priority}
                                    tags={ticket.tag}
                                    user={null}
                                />
                            )) || <></>}
                        </div>
                    </div>
                  ))
                : null
            }
        </div>
    );
};

export default TicketList;
