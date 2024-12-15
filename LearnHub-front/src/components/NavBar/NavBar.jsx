import React from 'react';
import { Link } from 'react-router-dom';
import { useToken } from "../../contexts/session.context";
import { jwtDecode } from "jwt-decode";

const NavBar = () => {
    const token = useToken();
    let isAdmin = false;

    // Decodificar el token para obtener el rol
    if (token) {
        try {
            const decoded = jwtDecode(token); // Usamos jwtDecode
            isAdmin = decoded.role === 'profesor';
        } catch (error) {
            console.error('Error decodificando el token:', error);
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light navbar-custom">
                <div className="container-fluid d-flex align-items-center">
                    {/* Logo a la izquierda */}
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img 
                            src="/img/logo-learnhub.png" 
                            alt="LearnHub Logo" 
                            style={{ height: '40px' }} 
                        />
                        <h1 className="ms-2 mb-0 fs-4 title-custom">LearnHub</h1>
                    </Link>
                    {/* Botón toggle para dispositivos pequeños */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Menú de navegación alineado a la derecha */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            {
                                !token
                                    ? <>
                                        <li className='nav-item'>
                                            <Link className='nav-link' to="/login">Login</Link>
                                        </li>
                                        <li className='nav-item'>
                                            <Link className='nav-link' to="/register">Register</Link>
                                        </li>
                                    </>
                                    : <>
                                        <li className='nav-item'>
                                            <Link className='nav-link' to="/cursos">Cursos</Link>
                                        </li>
                                        <li className='nav-item'>
                                            <Link className='nav-link' to="/tecnologias">Tecnologías</Link>
                                        </li>
                                        <li className='nav-item'>
                                            <Link className='nav-link' to="/categorias">Categorías</Link>
                                        </li>
                                        <li className='nav-item'>
                                            <Link className='nav-link' to="/profesores">Profesores</Link>
                                        </li>
                                        {/* Botón de Admin visible solo para profesores */}
                                        {isAdmin && (
                                            <li className='nav-item'>
                                                <Link className='nav-link me-2 boton-custom-2' to="/admin">
                                                    Admin
                                                    <i className="bi bi-tools ms-2"></i>
                                                </Link>
                                            </li>
                                        )}
                                        <li className='nav-item'>
                                            <Link className='nav-link d-flex align-items-center boton-custom' to="/logout">
                                                Logout 
                                                <i className="bi bi-box-arrow-right ms-2"></i>
                                            </Link>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Barra adicional para Admin */}
            {isAdmin && (
                <div className="bg-light py-2 border-top">
                    <div className="container d-flex justify-content-around">
                        <Link to="/admin/cursos" className="btn btn-link text-decoration-none text-dark">
                            <i className="bi bi-journal-code me-2"></i> Administrar Cursos
                        </Link>
                        <Link to="/admin/categorias" className="btn btn-link text-decoration-none text-dark">
                            <i className="bi bi-tags me-2"></i> Administrar Categorías
                        </Link>
                        <Link to="/admin/tecnologias" className="btn btn-link text-decoration-none text-dark">
                            <i className="bi bi-cpu me-2"></i> Administrar Tecnologías
                        </Link>
                        <Link to="/admin/usuarios" className="btn btn-link text-decoration-none text-dark">
                            <i className="bi bi-people me-2"></i> Administrar Usuarios
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;
