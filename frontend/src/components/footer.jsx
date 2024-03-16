import React from 'react';

const Footer = () => {
    const footerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#000',
        color: '#fff',
        padding: '10px'
    };

    const itemStyle = {
        margin: '0 20px'
    };

    return (
        <div style={footerStyle}>
            <div style={itemStyle}>
                © 2024 HelpDesk
            </div>
            <div style={itemStyle}>
                Impressum | Datenschutz
            </div>
        </div>
    );
};

export default Footer;