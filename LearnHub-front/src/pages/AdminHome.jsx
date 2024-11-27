import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
    return (
        <div className="container my-5">
            {/* Título */}
            <h2 className="text-center text-custom mb-4">Panel de Administración</h2>
            
            {/* Bienvenida */}
            <p className="text-center text-muted fs-5 ">
                Bienvenido al panel de administración. Aquí puedes gestionar los cursos, categorías y tecnologías de LearnHub.
            </p>

            {/* Botones */}
            <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
                <Link to="/admin/cursos" className="btn btn-admin shadow d-flex align-items-center gap-2">
                    <i className="bi bi-book"></i> Administrar Cursos
                </Link>
                <Link to="/admin/categorias" className="btn btn-admin shadow d-flex align-items-center gap-2">
                    <i className="bi bi-tags"></i> Administrar Categorías
                </Link>
                <Link to="/admin/tecnologias" className="btn btn-admin shadow d-flex align-items-center gap-2">
                    <i className="bi bi-tools"></i> Administrar Tecnologías
                </Link>
            </div>
        </div>
    );
};

export default AdminHome;
