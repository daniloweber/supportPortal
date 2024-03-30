import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const TicketView = () => {
    const [tickets, setTickets] = useState();
    const [filterStatus] = useState("");
    useEffect(() => {
        const fetchTickets = async () => {
            const response = await fetch('http://localhost:8080/ticket/list', {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                method: 'GET'
                });
            const data = await response.json();
            setTickets(data);
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

    

    const [startDate] = useState(null);

    return (
        <div>
            <table style={tableStyle}>
                <thead>
                    <tr style={trStyle(0)}>
                        <th style={thStyle}>Datum</th>
                        <th style={thStyle}>Betreff</th>
                        <th style={thStyle}>Status</th>
                        <th style={thStyle}>Anhang</th>
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
                  </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TicketView;