import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as serviceTecnologias from '../../services/tecnologias.service';
import Notification from '../Notificaciones/Notification';

const EditarTecnologia = () => {
    const { id } = useParams(); // Obtener el ID de la tecnología desde la URL
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [notification, setNotification] = useState(null);
    const navigate = useNavigate();

    // Cargar la tecnología actual
    useEffect(() => {
        const fetchTecnologia = async () => {
            try {
                const tecnologia = await serviceTecnologias.getTecnologia(id); // Servicio para obtener la tecnología por ID
                setNombre(tecnologia.nombre || '');
                setDescripcion(tecnologia.descripcion || '');
            } catch (error) {
                console.error('Error al cargar la tecnología:', error);
                setNotification({ type: 'error', message: 'Error al cargar la tecnología. Intente nuevamente.' });
                navigate('/admin/tecnologias'); // Redirigir en caso de error
            }
        };

        fetchTecnologia();
    }, [id, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Datos para enviar al backend
        const tecnologiaData = { nombre, descripcion };

        try {
            await serviceTecnologias.editarTecnologia(id, tecnologiaData); // Servicio para editar tecnología
            setNotification({ type: 'success', message: 'Tecnología actualizada con éxito.' });
            navigate('/admin/tecnologias', { state: { notification: { type: 'success', message: 'Tecnología actualizada con éxito.' } } });
        } catch (error) {
            console.error('Error al actualizar la tecnología:', error);
            setNotification({ type: 'error', message: 'Error al actualizar la tecnología. Intente nuevamente.' });
        }
    };

    return (
        <div className="container my-5">
            {/* Notificación */}
            {notification && (
                <Notification
                    type={notification.type}
                    message={notification.message}
                    onClose={() => setNotification(null)}
                />
            )}

            <h2 className="text-center mb-4 text-custom">Editar Tecnología</h2>
            <form onSubmit={handleSubmit} className="shadow-lg p-4 rounded bg-light">
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre de la Tecnología</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        placeholder="Ejemplo: React"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <textarea
                        className="form-control"
                        id="descripcion"
                        rows="3"
                        placeholder="Una breve descripción de la tecnología"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        required
                    />
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>
                        Cancelar
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Guardar Cambios
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditarTecnologia;
