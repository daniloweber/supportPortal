import React, { useState } from 'react';

const register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [department, setDepartment] = useState('');

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        gap: '1em',
        color: 'black',
        backgroundColor: 'white',
        padding: '1em',
        borderRadius: '8px',
        maxWidth: '500px',
        margin: '20px auto',
        marginBottom: '100px',
    };

    const inputStyle = {
        padding: '0.5em',
        borderRadius: '4px',
        border: '1px solid black',
        width: '100%',
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log(`Vorname: ${firstName}, Nachname: ${lastName}, E-Mail: ${email}, Telefonnummer: ${phoneNumber}, Abteilung: ${department}`);
    };

    return (
        <form style={formStyle} onSubmit={handleSubmit}>
            <input style={inputStyle} type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required placeholder="Vorname" />
            <input style={inputStyle} type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required placeholder="Nachname" />
            <input style={inputStyle} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="E-Mail" />
            <input style={inputStyle} type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required placeholder="Telefonnummer" />
            <input style={inputStyle} type="text" value={department} onChange={(e) => setDepartment(e.target.value)} required placeholder="Abteilung" />
            <button style={inputStyle} type="submit">Registrieren</button>
        </form>
    );
};

export default register;