import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TicketViewStaff = () => {
    const [tickets, setTickets] = useState();
    const [filterStatus] = useState("");

    const [isLoading , setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTickets = async () => {
            const response = await fetch('http://localhost:8080/ticket/list/staff', {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                method: 'GET'
                });
            const data = await response.json();
            setTickets(data);
            setIsLoading(false);
        };
        fetchTickets();
    }, []);

    const tableStyle = {
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        borderCollapse: 'collapse',
        width: 'calc(100% - 40px)'
    };

    const thStyle = {
        border: 'none',
        padding: '8px',
        backgroundColor: '#52C4D7',
        color: '#333'
    };

    const tdStyle = {
        border: 'none',
        padding: '8px'
    };

    const trStyle = index => ({
        backgroundColor: index % 2 === 0 ? '#fff' : '#f2f2f2',
        border: 'none',
        padding: '8px'
    });

    const selectStyle = {
        width: '100%',
        padding: '8px',
        border: '1px solid #ddd'
    };

    const linkStyle = {
        color: 'black',
        textDecoration: 'none'
    };

    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <table style={tableStyle}>
                <thead>
                    <tr style={trStyle(0)}>
                        <th style={thStyle}>Datum</th>
                        <th style={thStyle}>Betreff</th>
                        <th style={thStyle}>Status</th>
                        <th style={thStyle}>Anhang</th>
                        <th style={thStyle}>Vorname</th> {/* Nur für Mitarbeiter sichtbar */}
                        <th style={thStyle}>Nachname</th> {/* Nur für Mitarbeiter sichtbar */}
                    </tr>
                </thead>
                <tbody>
                {tickets && tickets.map((ticket, index) => (
                  <tr style={trStyle(index + 1)} key={ticket._id}>
                        <td style={tdStyle}>
                            <Link to={`/ticket/${ticket._id}`} style={linkStyle}>
                                {new Date(ticket.timestamp).toLocaleDateString()} 
                            </Link>
                        </td>
                        <td style={tdStyle}>
                            <Link to={`/ticket/${ticket._id}`} style={linkStyle}>
                                {ticket.title}
                            </Link>
                        </td>
                        <td style={tdStyle}>
                            <Link to={`/ticket/${ticket._id}`} style={linkStyle}>
                                {ticket.status}
                            </Link>
                        </td> 
                        <td style={tdStyle}>
                            <Link to={`/ticket/${ticket._id}`} style={linkStyle}>
                                 {ticket.fileName}
                            </Link>
                        </td>
                        <td style={tdStyle}>
                            <Link to={`/ticket/${ticket._id}`} style={linkStyle}>
                                 {ticket.name}
                            </Link>
                        </td>
                        <td style={tdStyle}>
                            <Link to={`/ticket/${ticket._id}`} style={linkStyle}>
                                 {ticket.surname}
                            </Link>
                        </td>
                         
                  </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TicketViewStaff;