import React, { useEffect, useState } from 'react';
import TicketList from './TicketList';
import './Home.css'

import { ReactComponent as DisplayIcon } from '../icons/Display.svg';
import { ReactComponent as DownIcon } from '../icons/down.svg';

export default function Apicall() {
  
    const [data, setData] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://api.quicksell.co/v1/internal/frontend-assignment"
          );
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);

    const [viewMode, setViewMode] = useState("status");
    const [sortOrder, setSortOrder] = useState("priority");
    const [groupedTickets, setGroupedTickets] = useState({});
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const groupTickets = (tickets, mode) => {
        const groups = {};
        for (const ticket of tickets) {
            const key = mode === "status" ? ticket.status :
                        mode === "priority" ? ticket.priority : ticket.userId;
            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(ticket);
        }
        return groups;
    };

    const sortTickets = (tickets, order) => {
      return [...tickets].sort((a, b) => {
          if (order === "priority") {
              return b.priority - a.priority; 
          } else if (order === "title") {
              return a.title.localeCompare(b.title); 
          }
          return 0;
      });
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    useEffect(() => {
      if (data && data.tickets) {
          const grouped = groupTickets(data.tickets, viewMode);

          for (const key in grouped) {
              grouped[key] = sortTickets(grouped[key], sortOrder);
          }

          setGroupedTickets(grouped);
      }
  }, [data, viewMode, sortOrder]);

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (!event.target.closest(".display-button") && !event.target.closest(".dropdown-menu")) {
            setIsDropdownOpen(false);
        }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);

  return (
    <>
    <div>
    <div className="controls">
                <div className="display-button" onClick={toggleDropdown}>
                    <DisplayIcon/>
                    <span>Display</span>
                    <span className="dropdown-arrow"><DownIcon/></span>
                </div>
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <div className="dropdown-section">
                            <label>Grouping</label>
                            <select value={viewMode} onChange={(e) => setViewMode(e.target.value)}>
                                <option value="status">Status</option>
                                <option value="priority">Priority</option>
                                <option value="user">User</option>
                            </select>
                        </div>
                        <div className="dropdown-section">
                            <label>Ordering</label>
                            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                                <option value="priority">Priority</option>
                                <option value="title">Title</option>
                            </select>
                        </div>
                    </div>
                )}
            </div>
        {data ? <TicketList groupedTickets={groupedTickets} viewMode={viewMode} users={data.users} /> : <p>Loading...</p>}
    </div>
    </>
  )
}
