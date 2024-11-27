import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as serviceTecnologias from '../../services/tecnologias.service';

const ConfirmDeleteTecnologia = () => {
    const { id } = useParams(); // Obtener el ID de la tecnología desde la URL
    const [tecnologia, setTecnologia] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Cargar los datos de la tecnología por su ID
        serviceTecnologias.getTecnologia(id)
            .then((data) => setTecnologia(data))
            .catch((error) => {
                console.error('Error al obtener la tecnología:', error);
                navigate('/admin/tecnologias'); // Redirigir si no se encuentra la tecnología
            });
    }, [id, navigate]);

    const handleConfirm = async () => {
        try {
            await serviceTecnologias.eliminarTecnologia(id); // Eliminar la tecnología
            navigate('/admin/tecnologias', {
                state: { notification: { type: "success", message: "Tecnología eliminada con éxito." } }
            });
        } catch (error) {
            console.error('Error al eliminar la tecnología:', error);
            navigate('/admin/tecnologias', {
                state: { notification: { type: "error", message: "Error al eliminar la tecnología. Intente nuevamente." } }
            });
        }
    };

    const handleCancel = () => {
        navigate('/admin/tecnologias'); // Volver a la lista de tecnologías sin eliminar
    };

    if (!tecnologia) {
        return <p>Cargando datos de la tecnología...</p>;
    }

    return (
        <div className="container my-5">
            <div className="card mx-auto p-4 shadow-lg" style={{ maxWidth: '600px' }}>
                <h2 className="text-center text-custom mb-4">Confirmar Eliminación</h2>
                <p className="text-center">
                    ¿Estás seguro de que deseas eliminar la tecnología <strong>"{tecnologia.nombre}"</strong>? Esta acción no se puede deshacer.
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

export default ConfirmDeleteTecnologia;
