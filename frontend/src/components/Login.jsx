import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle login
    const response = await fetch('http://localhost:8080/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mail, password }),
    });
    const data = await response.json();
    localStorage.setItem('token', data.token);
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
<<<<<<< Updated upstream
      <input style={inputStyle} type="email" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
=======
      <input style={inputStyle} type="mail" placeholder="E-Mail" value={mail} onChange={(e) => setMail(e.target.value)} />
>>>>>>> Stashed changes
      <input style={inputStyle} type="password" placeholder="Passwort" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button style={inputStyle} type="submit">Einloggen</button>
      <div style={{ textAlign: 'center', fontSize: '20px' }}>
        <p>Noch kein Konto?</p>
    <Link to="/register" style={{ color: 'black', textDecoration: 'underline' }}>Hier zur Registrierung</Link>
      </div>
    </form>
  );
};

export default Login;