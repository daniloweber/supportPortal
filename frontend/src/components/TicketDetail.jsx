import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TicketDetail = ({ tickets = [] }) => {
    const { id } = useParams();
    const [ticket, setTicket] = useState(null);

    useEffect(() => {
        const fetchedTicket = tickets.find(ticket => ticket.id === id);
        setTicket(fetchedTicket);
    }, [id, tickets]);

    if (!ticket) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 70px' }}>
            <h1>Ticket {ticket.id}</h1>
            <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid black', fontWeight: 'bold' }}>Vorname:</td>
                        <td style={{ border: '1px solid black' }}>{ticket.firstName}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', fontWeight: 'bold' }}>Nachname:</td>
                        <td style={{ border: '1px solid black' }}>{ticket.lastName}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', fontWeight: 'bold' }}>E-Mail:</td>
                        <td style={{ border: '1px solid black' }}>{ticket.email}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', fontWeight: 'bold' }}>Telefonnummer:</td>
                        <td style={{ border: '1px solid black' }}>{ticket.phone}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', fontWeight: 'bold' }}>Betreff:</td>
                        <td style={{ border: '1px solid black' }}>{ticket.subject}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', fontWeight: 'bold' }}>Abteilung:</td>
                        <td style={{ border: '1px solid black' }}>{ticket.department}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', fontWeight: 'bold' }}>Beschreibung:</td>
                        <td style={{ border: '1px solid black', whiteSpace: 'pre-line' }}>{ticket.description}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', fontWeight: 'bold' }}>Status:</td>
                        <td style={{ border: '1px solid black' }}>{ticket.status}</td>
                    </tr>
                    {ticket.files && ticket.files.map((fileUrl, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black', fontWeight: 'bold' }}>Datei {index + 1}:</td>
                            <td style={{ border: '1px solid black' }}><a href={fileUrl}>Link zur Datei</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TicketDetail;