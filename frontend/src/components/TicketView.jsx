import React, { useState, useEffect } from 'react';

const TicketView = () => {
    const [data, setData] = useState([]); // Zustand für die Daten

    // Funktion für Abfrage
    //const fetchData = async () => {
        // const response = await fetch('URL Ihrer Datenbank');
        // const data = await response.json();
        // setData(data);
    //};

    // Der useEffect Hook führt die fetchData Funktion aus, wenn die Komponente zum ersten Mal gerendert wird
   /* useEffect(() => {
        fetchData();
    }, []); */

    return (
        <table>
            <thead>
                <tr>
                    <th>Ticket</th>
                    <th>Datum</th>
                    <th>Betreff</th>
                    <th>Vorname</th>
                    <th>Nachname</th>
                    <th>Abteilung</th>
                    <th>Email</th>
                    <th>Telefonnummer</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.ticket}</td>
                        <td>{item.datum}</td>
                        <td>{item.betreff}</td>
                        <td>{item.vorname}</td>
                        <td>{item.nachname}</td>
                        <td>{item.abteilung}</td>
                        <td>{item.email}</td>
                        <td>{item.telefonnummer}</td>
                        <td>{item.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TicketView;