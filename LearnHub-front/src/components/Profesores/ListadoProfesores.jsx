import React from 'react';
import { Link } from 'react-router-dom';

const ListadoProfesores = ({ listado }) => {
    // Función para capitalizar la primera letra
    const capitalize = (str) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4 fw-light">Profesores</h2>
            <div className="row">
                {listado.map((profesor) => (
                    <div key={profesor._id} className="col-md-4 col-sm-6 col-12 mb-4 d-flex">
                        <div className="card card-custom flex-fill shadow-sm p-4">
                            {/* Imagen del profesor */}
                            <img
                                src={`/img/${profesor.foto}`}
                                alt={`${capitalize(profesor.user.nombre)} ${capitalize(profesor.user.apellido)}`}
                                className="card-img-top"
                                
                            />
                            <div className="card-body d-flex flex-column justify-content-between">
                                {/* Información del profesor */}
                                <h3 className="card-title text-center text-custom">
                                    {capitalize(profesor.user.nombre)} {capitalize(profesor.user.apellido)}
                                </h3>
                                <p className="card-text text-muted text-center">{profesor.bio}</p>
                                <p className="card-text text-center">
                                    <strong>Email:</strong> {profesor.user.email}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListadoProfesores;