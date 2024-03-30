import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

export default function TicketDetail () {
    const navigate = useNavigate();
    const { id } = useParams();
    const [editMode, setEditMode] = useState(false);
    const [ticket, setTicket] = useState();
    const [isLoading, setIsLoading] = useState(true);

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
            setIsLoading(false);
        };
        fetchData();
    }, []);

    const handleEdit = async () => {

        const tbody = document.querySelector('tbody');
        const td = tbody.querySelectorAll('td');

        const formData = new FormData();
        formData.append('title', document.getElementById('ticket').innerText);
        formData.append('description', td?.item(1)?.innerText);
        formData.append('status', td?.item(3)?.innerText);
        formData.append('editorid', ticket.editorid);
        formData.append('file', ticket.file);
        formData.append('fileFormat', ticket.fileFormat);
        formData.append('filename', ticket.filename);


        const response = await fetch(`http://localhost:8080/ticket/update/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            method: 'PATCH',
            body: formData
        });
        const data = await response.json();
        setEditMode(false);
        alert(data.message);

        setTimeout(() => {
            navigate(`/TicketView`);
        }, 3000);
        }


    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className={'container py-3'}>
                <div className={'text-end'}>
                    <button className={'btn btn-outline-secondary'} onClick={handleEdit}>Save</button>
                <button className={'btn btn-outline-secondary ms-2'} onClick={() => setEditMode(!editMode)}>Edit</button>
            </div>

                <div className={'row row-cols-2 row-cols-md-3'}>
                    <div className={'col col-md-4'}>
                        {ticket.fileFormat === 'pdf' ? (
                            <iframe
                                src={`data:application/pdf;base64,${ticket.file}`}
                                width="100%"
                                height="600px"
                            />
                        ) : (
                            <img src={`data:${ticket.fileFormat};base64,${ticket.file}`} alt="Document"/>
                        )}
                    </div>

                    <div className={'col col-md-8'}>
                        <h1 id={"ticket"} contentEditable={editMode}>{ticket.title}</h1>
                        <table className={"table"} id={"transparentTable"}>
                            <tbody>
                            <tr>
                                <td>Description</td>
                                <td contentEditable={editMode}>{ticket.description}</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td contentEditable={editMode}>{ticket.status}</td>
                            </tr>
                            <tr>
                                <td>Mail</td>
                                <td>{ticket.mail}</td>
                            </tr>
                            <tr>
                                <td>Contact</td>
                                <td>{ticket.name} {ticket.surname}</td>
                            </tr>
                            <tr>
                                <td>ID</td>
                                <td>{ticket._id}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}