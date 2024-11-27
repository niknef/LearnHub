import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as serviceCursos from '../../services/cursos.service';

const ConfirmDeleteCurso = () => {
    const { id } = useParams(); // Obtener el ID del curso desde la URL
    const [curso, setCurso] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Cargar los datos del curso por su ID
        serviceCursos.getCurso(id)
            .then((data) => setCurso(data))
            .catch((error) => {
                console.error('Error al obtener el curso:', error);
                navigate('/admin/cursos'); // Redirigir si el curso no se encuentra
            });
    }, [id, navigate]);

    // Asegúrate de definir esta función correctamente
    const handleConfirm = async () => {
        try {
            await serviceCursos.eliminarCurso(id); // Eliminar el curso
            navigate('/admin/cursos', {
                state: { notification: { type: "success", message: "Curso eliminado con éxito." } }
            });
        } catch (error) {
            console.error('Error al eliminar el curso:', error);
            navigate('/admin/cursos', {
                state: { notification: { type: "error", message: "Error al eliminar el curso." } }
            });
        }
    };

    const handleCancel = () => {
        navigate('/admin/cursos'); // Volver a la lista de cursos sin eliminar
    };

    if (!curso) {
        return <p>Cargando datos del curso...</p>;
    }

    return (
        <div className="container my-5">
            <div className="card mx-auto p-4 shadow-lg" style={{ maxWidth: '600px' }}>
                <h2 className="text-center text-custom mb-4">Confirmar Eliminación</h2>
                <p className="text-center">
                    ¿Estás seguro de que deseas eliminar el curso <strong>"{curso.nombre}"</strong>? Esta acción no se puede deshacer.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <button className="btn btn-danger btn-lg" onClick={handleConfirm}>
                        Confirmar
                    </button>
                    <button className="btn btn-secondary btn-lg" onClick={handleCancel}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteCurso;
