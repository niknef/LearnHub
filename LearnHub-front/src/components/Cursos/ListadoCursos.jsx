import React from 'react';
import { Link } from 'react-router-dom';

const ListadoCursos = ({ listado }) => {
    // Función para capitalizar la primera letra
    const capitalize = (str) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4 fw-light ">Listado de Cursos</h2>
            <div className="row">
                {listado.map((curso) => (
                    <div key={curso._id} className="col-md-4 col-sm-6 col-12 mb-4 d-flex">
                        <div className="card card-custom flex-fill d-flex flex-column" style={{ width: '100%' }}>
                            <img 
                                src={`/img/${curso.img}`}
                                className="card-img-top" 
                                alt={capitalize(curso.nombre)} 
                                style={{ maxHeight: '200px', objectFit: 'cover' }} 
                            />
                            <div className="card-body d-flex flex-column">
                                <h3 className="card-title fw-light">{capitalize(curso.nombre)}</h3>
                                <p className="card-text fw-lighter"><strong className='text-custom'>Horas:</strong> <i className="bi bi-clock"></i> {curso.horas}</p>
                                <p className="card-text fw-lighter"><strong className='text-custom'>Categoría:</strong> {capitalize(curso.categoria)}</p>
                                <div className="mt-auto">
                                    <Link to={"/cursos/" + curso._id} className="btn boton-custom w-100">
                                        <i className="bi bi-arrow-return-right me-2"></i> Ver detalle
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListadoCursos;
