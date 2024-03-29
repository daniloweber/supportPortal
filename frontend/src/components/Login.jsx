import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <input style={inputStyle} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input style={inputStyle} type="password" placeholder="Passwort" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button style={inputStyle} type="submit">Einloggen</button>
      <div style={{ textAlign: 'center' }}>
        <p>Noch kein Konto?</p>
        <Link to="/register">Zur Registrierung</Link>
      </div>
    </form>
  );
};

export default Login;