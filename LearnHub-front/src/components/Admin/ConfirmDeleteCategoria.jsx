import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as serviceCategorias from '../../services/categorias.service';

const ConfirmDeleteCategoria = () => {
    const { id } = useParams(); // Obtener el ID de la categoría desde la URL
    const [categoria, setCategoria] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Cargar los datos de la categoría por su ID
        serviceCategorias.getCategoria(id)
            .then((data) => setCategoria(data))
            .catch((error) => {
                console.error('Error al obtener la categoría:', error);
                navigate('/admin/categorias'); // Redirigir si no se encuentra la categoría
            });
    }, [id, navigate]);

    const handleConfirm = async () => {
        try {
            await serviceCategorias.eliminarCategoria(id); // Eliminar la categoría
            navigate('/admin/categorias', {
                state: { notification: { type: "success", message: "Categoría eliminada con éxito." } }
            });
        } catch (error) {
            console.error('Error al eliminar la categoría:', error);
            navigate('/admin/categorias', {
                state: { notification: { type: "error", message: "Error al eliminar la categoría. Intente nuevamente." } }
            });
        }
    };

    const handleCancel = () => {
        navigate('/admin/categorias'); // Volver a la lista de categorías sin eliminar
    };

    if (!categoria) {
        return <p>Cargando datos de la categoría...</p>;
    }

    return (
        <div className="container my-5">
            <div className="card mx-auto p-4 shadow-lg" style={{ maxWidth: '600px' }}>
                <h2 className="text-center text-custom mb-4">Confirmar Eliminación</h2>
                <p className="text-center">
                    ¿Estás seguro de que deseas eliminar la categoría <strong>"{categoria.nombre}"</strong>? Esta acción no se puede deshacer.
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

export default ConfirmDeleteCategoria;
