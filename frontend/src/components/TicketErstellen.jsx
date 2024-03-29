import React, { useState } from 'react';

const createTicket = () => {
  const [name, setFirstName] = useState('');
  const [surname, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
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
//Logik für das Erstellen eines Tickets

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const ticketData = {
      title: data.subject,
      description: data.description,
      file: data.file,
    };
  
    const response = await fetch('http://localhost:8081/ticket/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify(ticketData),
    });
  
    const responseData = await response.json();
    alert(responseData.message);

    setFirstName('');
    setLastName('');
    setMail('');
    setPhone('');
    setTitle('');
    setDescription('');
    setFile(null);
 

  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <input style={inputStyle} type="text" placeholder="Vorname" value={name} onChange={(e) => setFirstName(e.target.value)} />
      <input style={inputStyle} type="text" placeholder="Nachname" value={surname} onChange={(e) => setLastName(e.target.value)} />
      <input style={inputStyle} type="email" placeholder="E-Mail" value={mail} onChange={(e) => setMail(e.target.value)} />
      <input style={inputStyle} type="tel" placeholder="Telefonnummer" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input style={inputStyle} type="text" placeholder="Betreff" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea style={inputStyle} placeholder="Bitte beschreiben Sie hier Ihr Problem" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input style={fileInputStyle} type="file" multiple onChange={(e) => setFile(e.target.files)} />
      <button style={inputStyle} type="submit">Senden</button>
    </form>
  );
};

export default createTicket;