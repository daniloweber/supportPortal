import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [isImpressumClicked, setIsImpressumClicked] = useState(false);
    const [isDatenschutzClicked, setIsDatenschutzClicked] = useState(false);

    const handleImpressumClick = () => {
        setIsImpressumClicked(true);
        setTimeout(() => setIsImpressumClicked(false), 300);
    };

    const handleDatenschutzClick = () => {
        setIsDatenschutzClicked(true);
        setTimeout(() => setIsDatenschutzClicked(false), 300);
    };

    const footerStyle = {
        position: 'fixed', 
        bottom: 0, 
        width: '100%', 
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#262626',
        color: '#fff',
        padding: '10px'
    };

    const itemContainerStyle = {
        display: 'flex',
        margin: '0 20px' 
    };

    const itemStyle = {
        margin: '0 20px'
    };

    return (
        <div style={footerStyle}>
            <div style={itemContainerStyle}>
                <div style={itemStyle}>
                    © 2024 HelpDesk
                </div>
            </div>
            <div style={itemContainerStyle}>
                <div style={itemStyle}>
                    <Link to="/impressum" onClick={handleImpressumClick} style={{ color: isImpressumClicked ? '#ccc' : '#fff', textDecoration: 'none' }}>Impressum</Link> | <Link to="/datenschutz" onClick={handleDatenschutzClick} style={{ color: isDatenschutzClicked ? '#ccc' : '#fff', textDecoration: 'none' }}>Datenschutz</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;