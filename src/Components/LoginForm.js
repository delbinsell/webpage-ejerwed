import React from 'react';
import '../App.css';

const LoginForm = () => {
    return (
        <div className="login-form-container">
            <h1 className="login-title">Inicio de Sesión</h1>
            <form className="login-form">
                <input type="text" placeholder="Usuario" className="login-input" />
                <input type="password" placeholder="Contraseña" className="login-input" />
                <button type="submit" className="login-button">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default LoginForm;

