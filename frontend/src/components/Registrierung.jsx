import React, { useState } from 'react';

const Registrierung = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log(`E-Mail: ${email}, Passwort: ${password}`);
    };

    return (
        <div>
            <h2>Registrierung</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    E-Mail:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Passwort:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Registrieren</button>
            </form>
        </div>
    );
};

export default Registrierung;