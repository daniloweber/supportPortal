import React from 'react';

const Logout = (props) => {
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
    }

    return (
        <div style={props.style}>
             <button className="btn btn-secondary" onClick={handleLogout}>Logout</button> 
        </div>
    );
};

export default Logout;