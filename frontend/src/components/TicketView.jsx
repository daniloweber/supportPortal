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
            setTickets([data]);
        };
        fetchTickets();
    }, []);
    console.log(tickets);
    
    /*const [tickets, setTickets] = useState([
        {
            id: 1,
            date: '2022-03-01',
            subject: 'Problem mit dem Computer',
            firstName: 'Max',
            lastName: 'Muster',
            department: 'IT',
            email: 'max.muster@example.com',
            phoneNumber: '0123456789',
            status: 'Offen'
        },
        {
            id: 2,
            date: "2023-05-12",
            subject: "Drucker funktioniert nicht",
            firstName: "Anna",
            lastName: "Schmidt",
            department: "Marketing",
            email: "anna.schmidt@example.com",
            phoneNumber: "0987654321",
            status: "Offen"
          },
          {
            id: 3,
            date: "2024-03-16",
            subject: "Software-Installation fehlgeschlagen",
            firstName: "Lukas",
            lastName: "Wagner",
            department: "Entwicklung",
            email: "lukas.wagner@example.com",
            phoneNumber: "0123456789",
            status: "In Bearbeitung"
          },
          {
            id: 4,
            date: "2023-11-07",
            subject: "Internetverbindung instabil",
            firstName: "Sarah",
            lastName: "Meier",
            department: "Vertrieb",
            email: "sarah.meier@example.com",
            phoneNumber: "0987654321",
            status: "Gelöst"
          },
          {
            id: 5,
            date: "2024-02-14",
            subject: "Passwort vergessen",
            firstName: "Tim",
            lastName: "Müller",
            department: "Finanzen",
            email: "tim.mueller@example.com",
            phoneNumber: "0123456789",
            status: "Offen"
          },
          {
            id: 6,
            date: "2023-08-23",
            subject: "E-Mail-Problem",
            firstName: "Julia",
            lastName: "Peters",
            department: "Personalwesen",
            email: "julia.peters@example.com",
            phoneNumber: "0987654321",
            status: "In Bearbeitung"
          }
          
    ]);*/

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

   



    const [startDate] = useState(null);

   

    return (
        <div>
            
            <table style={tableStyle}>
                <thead>
                    <tr style={trStyle(0)}>
                        <th style={thStyle}>Ticket ID</th>
                        <th style={thStyle}>Datum</th>
                        <th style={thStyle}>Betreff</th>
                        <th style={thStyle}>Vorname</th>
                        <th style={thStyle}>Nachname</th>
                        <th style={thStyle}>Abteilung</th>
                        <th style={thStyle}>E-Mail</th>
                        <th style={thStyle}>Telefonnummer</th>
                        <th style={thStyle}>Status</th>
                    </tr>
                </thead>
                <tbody>
                {tickets && tickets.map((ticket, index) => (
                <tr style={trStyle(index + 1)} key={ticket.id}>
                    <td style={tdStyle}>
                        <Link to={`/ticketdetail/${ticket.id}`}>{ticket.id}</Link>
                    </td>
                    <td style={tdStyle}>{ticket.date}</td>
                    <td style={tdStyle}>{ticket.subject}</td>
                    <td style={tdStyle}>{ticket.firstName}</td>
                    <td style={tdStyle}>{ticket.lastName}</td>
                    <td style={tdStyle}>{ticket.department}</td>
                    <td style={tdStyle}>{ticket.email}</td>
                    <td style={tdStyle}>{ticket.phoneNumber}</td>
                    <td style={tdStyle}>
                        <select 
                            style={selectStyle} 
                            value={ticket.status} 
                            
                        >
                            <option>Offen</option>
                            <option>In Bearbeitung</option>
                            <option>Geschlossen</option>
                        </select>
                    </td>
                </tr>
            ))}
                </tbody>
            </table>
        </div>
    );
};

export default TicketView;