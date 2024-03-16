import React from 'react';

<<<<<<< HEAD
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
=======
function Footer() {
    return (
        <footer>
            <p>This is a footer</p>
        </footer>
    );
}
>>>>>>> e198a60648dd02aaf2fec97ca33b1bba98eaeb36

export default Footer;