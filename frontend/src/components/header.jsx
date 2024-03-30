import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logout from './Logout';
import { checkLoginState } from './CheckLoginState';

const Header = () => {
    const [isHomeClicked, setIsHomeClicked] = useState(false);
    const [isTicketViewClicked, setIsTicketViewClicked] = useState(false);
    const [isTicketViewStaffClicked, setIsTicketViewStaffClicked] = useState(false);

    useEffect(() => {
        const fetch = async () => {
        const response = await checkLoginState();
        setIsLoggedIn(response);
        }
        fetch();
    }, [isLoggedIn]);

    const handleHomeClick = () => {
        setIsHomeClicked(true);
        setTimeout(() => setIsHomeClicked(false), 300);
    };
    
    const handleTicketViewClick = () => {
        setIsTicketViewClicked(true);
        setTimeout(() => setIsTicketViewClicked(false), 300);
    };
    
    const handleTicketViewStaffClick = () => {
        setIsTicketViewStaffClicked(true);
        setTimeout(() => setIsTicketViewStaffClicked(false), 300);
    };

    return (
        <>
    <header style={{ background: '#FDFDFD', display: 'flex', justifyContent: 'space-between', padding: '10px', alignItems: 'center', width: '100%', top: 0, zIndex: 1000 }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <Link to="/">
                <img src={'/images/Logo.png'} alt="Logo" style={{ height: '60px', marginLeft: '350px' }} />
            </Link>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around' }}>
        <Link to="/" onClick={handleHomeClick} style={{ color: 'black', textDecoration: 'none', fontSize: '20px', transform: isHomeClicked ? 'scale(0.9)' : 'scale(1)', transition: 'transform 0.25s' }}>Home</Link> 
        <Link to="/TicketView" onClick={handleTicketViewClick} style={{ color: 'black', textDecoration: 'none', fontSize: '20px', transform: isTicketViewClicked ? 'scale(0.9)' : 'scale(1)', transition: 'transform 0.25s' }}>Ticket Übersicht</Link> 
        <Link to="/TicketViewStaff" onClick={handleTicketViewStaffClick} style={{ color: 'black', textDecoration: 'none', fontSize: '20px', transform: isTicketViewStaffClicked ? 'scale(0.9)' : 'scale(1)', transition: 'transform 0.25s' }}>Mitarbeiter Dashboard </Link> 
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
    {isLoggedIn ? 
        <Logout style={{ marginRight: '350px' }} />
        :
        <div style={{ marginRight: '350px' }}>
            <Link to="/Login" style={{ textDecoration: 'none' }}>
                <button className="btn btn-secondary">Login</button>
            </Link>
        </div>
    }
</div>
    </header>
    </>
    );
};

export default Header;