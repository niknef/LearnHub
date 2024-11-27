import React from 'react';
import { Link } from 'react-router-dom';

const ListadoCategorias = ({ listado }) => {
    // Función para capitalizar la primera letra
    const capitalize = (str) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4 fw-light">Categorías</h2>
            <div className="row">
                {listado.map((categoria) => (
                    <div key={categoria._id} className="col-md-4 col-sm-6 col-12 mb-4 d-flex">
                        <div className="card card-custom flex-fill shadow-sm">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h3 className="card-title text-center text-custom">{capitalize(categoria.nombre)}</h3>
                                <p className="card-text text-muted text-center">{categoria.descripcion}</p>
                            
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListadoCategorias;
