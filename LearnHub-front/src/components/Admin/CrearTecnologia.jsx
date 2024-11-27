import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as serviceTecnologias from '../../services/tecnologias.service';
import Notification from '../Notificaciones/Notification';

const CrearTecnologia = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [notification, setNotification] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Datos para enviar al backend
        const tecnologiaData = { nombre, descripcion };

        try {
            await serviceTecnologias.agregarTecnologia(tecnologiaData); // Servicio para agregar tecnología
            setNotification({ type: 'success', message: 'Tecnología creada con éxito.' });
            navigate('/admin/tecnologias', { state: { notification: { type: 'success', message: 'Tecnología creada con éxito.' } } });
        } catch (error) {
            console.error('Error al crear la tecnología:', error);
            setNotification({ type: 'error', message: 'Error al crear la tecnología. Intente nuevamente.' });
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

            <h2 className="text-center mb-4 text-custom">Crear Nueva Tecnología</h2>
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
                        Crear Tecnología
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CrearTecnologia;
