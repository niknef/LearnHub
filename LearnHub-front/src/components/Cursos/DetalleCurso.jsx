import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as serviceCurso from '../../services/cursos.service';

const DetalleCurso = () => {
    const [curso, setCurso] = useState(null); // Estado inicial nulo
    const { id } = useParams(); // Obtener el ID del curso desde la URL

    // Función para capitalizar la primera letra
    const capitalize = (str) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    useEffect(() => {
        const fetchCurso = async () => {
            try {
                const data = await serviceCurso.getCurso(id); // Llamar al servicio para obtener el curso
                setCurso(data);
            } catch (error) {
                console.error('Error al obtener el curso:', error);
            }
        };

        fetchCurso();
    }, [id]); // Solo se ejecuta cuando cambia el ID

    if (!curso) {
        return <div>Cargando datos del curso...</div>; // Mostrar mensaje mientras se carga el curso
    }

     return (
        <div className="container my-5">
    <div className="card mx-auto shadow-lg">
        {/* Imagen del curso */}
        <img
            src={`/img/${curso.img}`}
            alt={curso.nombre}
            className="card-img-top"
            style={{ objectFit: 'cover' }}
        />
        <div className="card-body">
            {/* Nombre y descripción */}
            <h2 className="card-title text-center fw-light">{capitalize(curso.nombre)}</h2>
            <p className="card-text text-muted text-center">{curso.descripcion}</p>

            {/* Información adicional */}
            <div className="row mt-4 text-center">
                <div className="col-md-4 mb-3">
                    <h3 className="text-custom"><strong>Categoría:</strong></h3>
                    <p>{capitalize(curso.categoria)}</p>
                </div>
                <div className="col-md-4 mb-3">
                    <h3 className="text-custom"><strong>Duración:</strong></h3>
                    <p><i className="bi bi-clock"></i> {curso.horas} horas</p>
                </div>
                <div className="col-md-4 mb-3">
                    <h3 className="text-custom"><strong>Tecnologías:</strong></h3>
                    <ul className="list-inline">
                        {curso.tecnologias.map((tec, index) => (
                            <li
                                key={index}
                                className="list-inline-item badge bg-secondary me-2"
                            >
                                {capitalize(tec)}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Botón para el curso */}
            <div className="text-center mt-4 mb-4">
                <a
                    href={curso.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn boton-custom btn-lg"
                >
                    Repositorio
                </a>
            </div>

            {/* Información del profesor */}
            <div className="row bg-light p-4 rounded align-items-center">
                <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
                    <img
                        src={`/img/${curso.profesor.foto}`}
                        alt={`${capitalize(curso.profesor.user.nombre)} ${capitalize(curso.profesor.user.apellido)}`}
                        className="rounded-circle"
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-12 col-md-8 text-center text-md-start">
                    <h2 className="mb-1">
                        {capitalize(curso.profesor.user.nombre)} {capitalize(curso.profesor.user.apellido)}
                    </h2>
                    <p className="text-muted mb-2">{curso.profesor.bio}</p>
                    <p className="text-muted"><strong>Email:</strong> {curso.profesor.user.email}</p>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default DetalleCurso;