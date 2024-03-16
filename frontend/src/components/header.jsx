import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <header style={{ background: 'white', display: 'flex', justifyContent: 'center', padding: '10px' }}>
         
            <Link to="/Home" style={{ margin: '0 10px' }}>Start</Link>
            <Link to="/TicketView" style={{ margin: '0 10px' }}>Ticket Übersicht</Link>
        </header>
        </>
    );
};

export default Header;