import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isHomeClicked, setIsHomeClicked] = useState(false);
    const [isTicketClicked, setIsTicketClicked] = useState(false);

    const handleHomeClick = () => {
        setIsHomeClicked(true);
        setTimeout(() => setIsHomeClicked(false), 300);
    };

    const handleTicketClick = () => {
        setIsTicketClicked(true);
        setTimeout(() => setIsTicketClicked(false), 300);
    };

    return (
        <>
        <header style={{ background: '#FDFDFD', display: 'flex', justifyContent: 'space-between', padding: '10px', alignItems: 'center', width: '100%', top: 0, zIndex: 1000 }}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
                <Link to="/">
                    <img src={'/images/Logo.png'} alt="Logo" style={{ height: '60px', marginLeft: '350px' }} />
                </Link>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <Link to="/" onClick={handleHomeClick} style={{ margin: '0 80px', color: 'black', textDecoration: 'none', fontSize: '20px', transform: isHomeClicked ? 'scale(0.9)' : 'scale(1)', transition: 'transform 0.25s' }}>Home</Link> 
                <Link to="/TicketView" onClick={handleTicketClick} style={{ margin: '0 10px', color: 'black', textDecoration: 'none', fontSize: '20px', transform: isTicketClicked ? 'scale(0.9)' : 'scale(1)', transition: 'transform 0.25s' }}>Ticket Übersicht</Link> 
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link to="/Login" style={{ marginRight: '350px', color: 'black', textDecoration: 'none', fontSize: '20px', border: '1px solid black', padding: '10px', borderRadius: '5px' }}>Login</Link>
            </div>
        </header>
        </>
    );
};

export default Header;