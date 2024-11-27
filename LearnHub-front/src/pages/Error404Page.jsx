import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Error404Page.css'; // Para estilos personalizados
import errorImage from "/img/404.svg"; // Ajusta la ruta según tu proyecto

const Error404Page = () => {
    const navigate = useNavigate();

    return (
        <div className="error-page-container">
            <img src={errorImage} alt="Error 404" className="error-image" />
            <h1 className="error-title">Oops! Página no encontrada</h1>
            <p className="error-text">La página que estás buscando no existe o ha sido movida.</p>
            <button
                className="btn btn-primary"
                onClick={() => navigate("/")}
            >
                Volver al inicio
            </button>
        </div>
    );
};

export default Error404Page;