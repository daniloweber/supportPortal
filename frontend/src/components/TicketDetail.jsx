import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TicketDetail = () => {
    const { id } = useParams();
   
    const [ticket, setTicket] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8080/ticket/get/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                method: 'GET'
            });
            const data = await response.json();
            setTicket(data);
            setLoaded(true);
        };
        fetchData();
    }, [id]);

    
    console.log(ticket);
    return (
        <>
            {ticket && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 70px' }}>
                    <h1>Ticket {ticket._id}</h1>
                    <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid black', fontWeight: 'bold' }}>Betreff:</td>
                                <td style={{ border: '1px solid black' }}>{ticket.title}</td>
                            </tr>
    
                            <tr>
                                <td style={{ border: '1px solid black', fontWeight: 'bold' }}>Beschreibung:</td>
                                <td style={{ border: '1px solid black', whiteSpace: 'pre-line' }}>{ticket.description}</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid black', fontWeight: 'bold' }}>Status:</td>
                                <td style={{ border: '1px solid black' }}>{ticket.status}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};

export default TicketDetail;