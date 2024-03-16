<<<<<<< HEAD
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
=======
import React from 'react';

class TicketView extends React.Component {
    render() {
        return (
            <div>
                <h1>Ticket View</h1>
                {/* You can add more components or HTML elements here */}
            </div>
        );
    }
}
>>>>>>> e198a60648dd02aaf2fec97ca33b1bba98eaeb36

export default TicketView;