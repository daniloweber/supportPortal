import React from 'react';


const Logout = () => {
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
    }

    return (
        <div>
             <button onClick={handleLogout}>Logout</button> 
        </div>
    );
};

export default Logout;