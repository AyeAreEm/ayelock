import React from 'react';
import './App.css';

const Password = ({type, password}) => {
    return (
        <div className="PasswordBox">
            <h2>{type}</h2>
            <h2>{password}</h2>
        </div>
    );
};

export default Password;