import React from 'react';
import {useNavigate} from "react-router-dom";

const Logout = (props) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
        setTimeout(() => window.location.reload(), 1000);
    }

    return (
        <div style={props.style}>
             <button className="btn btn-secondary" onClick={handleLogout}>Logout</button> 
        </div>
    );
};

export default Logout;