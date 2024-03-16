import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TicketView = () => {

    const [filterStatus, setFilterStatus] = useState("");
    const [filterDate, setFilterDate] = useState(null);
    
    const [tickets, setTickets] = useState([
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
          
    ]);

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

    const handleStatusChange = (id, newStatus) => {
        setTickets(tickets.map(ticket => 
            ticket.id === id ? { ...ticket, status: newStatus } : ticket
        ));
    };

    const filterMenuStyle = {
        marginTop: '120px',
        marginLeft: '20px',
        marginRight: '20px',
        display: 'flex',
        alignItems: 'center'
    };
    
    const filterLabelStyle = {
        fontWeight: 'bold',
        marginRight: '10px'
    };
    
    const filterSelectStyle = {
        border: 'none'
    };


    const [startDate, setStartDate] = useState(new Date());

    const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
        <input 
            style={{ border: 'none' }} 
            onClick={onClick} 
            ref={ref} 
            value={value}
        />
    ));

    const handleFilterChange = (event) => {
        setFilterStatus(event.target.value);
    };

    const handleDateFilterChange = (date) => {
        setFilterDate(date);
    };

    const filteredTickets = tickets.filter(ticket => {
        const ticketDate = new Date(ticket.date);
        return (filterStatus === "" || ticket.status === filterStatus) &&
               (!startDate || (ticketDate.getDate() === startDate.getDate() &&
                                ticketDate.getMonth() === startDate.getMonth() &&
                                ticketDate.getFullYear() === startDate.getFullYear()));
    });

    const resetStatusFilter = () => {
        setFilterStatus("");
    };
    
    const resetDateFilter = () => {
        setStartDate(null);
    };

    return (
        <div>
            <div style={filterMenuStyle}>
            <label style={filterLabelStyle}>
                Status:
                <select style={filterSelectStyle} onChange={handleFilterChange}>
                    <option value="">Alle</option>
                    <option value="Offen">Offen</option>
                    <option value="In Bearbeitung">In Bearbeitung</option>
                    <option value="Geschlossen">Geschlossen</option>
                </select>
                <button onClick={resetStatusFilter}>Filter zurücksetzen</button>
            </label>
            <label style={filterLabelStyle}>
            Datum:
            <DatePicker 
                selected={startDate} 
                onChange={handleDateFilterChange} 
                customInput={<CustomInput />}
            />
            <button onClick={resetDateFilter}>Filter zurücksetzen</button>
        </label>
</div>
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
                {filteredTickets.map((ticket, index) => (
                        <tr style={trStyle(index + 1)} key={ticket.id}>
                            <td style={tdStyle}>{ticket.id}</td>
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
                                    onChange={e => handleStatusChange(ticket.id, e.target.value)}
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