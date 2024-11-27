import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as serviceCategorias from '../../services/categorias.service';
import Notification from '../Notificaciones/Notification';

const EditarCategoria = () => {
    const { id } = useParams(); // Obtener el ID de la categoría desde la URL
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [notification, setNotification] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Cargar los datos de la categoría al montar el componente
        serviceCategorias.getCategoria(id)
            .then((data) => {
                setNombre(data.nombre);
                setDescripcion(data.descripcion);
            })
            .catch((error) => {
                console.error('Error al cargar la categoría:', error);
                setNotification({ type: 'error', message: 'Error al cargar la categoría.' });
            });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const categoriaData = { nombre, descripcion };

        try {
            await serviceCategorias.actualizarCategoria(id, categoriaData); // Servicio para actualizar categoría
            setNotification({ type: 'success', message: 'Categoría actualizada con éxito.' });
            navigate('/admin/categorias', { state: { notification: { type: 'success', message: 'Categoría actualizada con éxito.' } } });
        } catch (error) {
            console.error('Error al actualizar la categoría:', error);
            setNotification({ type: 'error', message: 'Error al actualizar la categoría. Intente nuevamente.' });
        }
    };

    return (
        <div className="container my-5">
            {notification && (
                <Notification
                    type={notification.type}
                    message={notification.message}
                    onClose={() => setNotification(null)}
                />
            )}

            <h2 className="text-center mb-4 text-custom">Editar Categoría</h2>
            <form onSubmit={handleSubmit} className="shadow-lg p-4 rounded bg-light">
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre de la Categoría</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
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
                        Actualizar Categoría
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditarCategoria;
