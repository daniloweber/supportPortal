import React, { useState } from 'react';

const createTicket = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [department, setDepartment] = useState('');
  const [file, setFile] = useState(null);

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

  const fileInputStyle = {
    ...inputStyle,
    border: 'none',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <input style={inputStyle} type="text" placeholder="Vorname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input style={inputStyle} type="text" placeholder="Nachname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input style={inputStyle} type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input style={inputStyle} type="tel" placeholder="Telefonnummer" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input style={inputStyle} type="text" placeholder="Betreff" value={subject} onChange={(e) => setSubject(e.target.value)} />
      <input style={inputStyle} type="text" placeholder="Abteilung" value={department} onChange={(e) => setDepartment(e.target.value)} />
      <textarea style={inputStyle} placeholder="Bitte beschreiben Sie hier Ihr Problem" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input style={fileInputStyle} type="file" multiple onChange={(e) => setFile(e.target.files)} />
      <button style={inputStyle} type="submit">Senden</button>
    </form>
  );
};

export default createTicket;