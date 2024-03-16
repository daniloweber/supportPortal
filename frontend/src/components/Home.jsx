import React from 'react';
import CreateTicket from './TicketErstellen.jsx';

const Home = () => {
  const headerStyle = {
    textAlign: 'center',
    color: 'black',
    padding: '10px',
  };

  return (
    <div>
      <h2 style={headerStyle}>Hast du ein Problem? Eröffne hier dein Ticket!</h2>
      <CreateTicket />
    </div>
  );
};

export default Home;