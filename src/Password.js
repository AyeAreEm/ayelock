import React from 'react';
import './App.css';

const Password = ({type, isRed, password}) => {

    return (
        <div className="PasswordBox">
            <h2><span className={isRed ? "red" : ''}>{type}</span></h2>
            <h2>{password}</h2>
        </div>
    );
};

export default Password;