import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as serviceCursos from '../../services/cursos.service';
import Notification from '../Notificaciones/Notification';

const EditarCurso = () => {
    const { id } = useParams(); // Obtener el ID del curso desde la URL
    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tecnologias, setTecnologias] = useState('');
    const [horas, setHoras] = useState('');
    const [link, setLink] = useState('');
    const [img, setImg] = useState(null);
    const [notification, setNotification] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Cargar los datos del curso al montar el componente
        serviceCursos.getCurso(id)
            .then((data) => {
                setNombre(data.nombre);
                setCategoria(data.categoria);
                setDescripcion(data.descripcion);
                setTecnologias(data.tecnologias.join(', ')); // Unir tecnologías en una cadena
                setHoras(data.horas);
                setLink(data.link);
                setImg(data.img);
            })
            .catch((error) => {
                console.error('Error al cargar el curso:', error);
                setNotification({ type: 'error', message: 'Error al cargar el curso.' });
            });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const tecnologiasArray = tecnologias.split(',').map((tec) => tec.trim());
        const cursoData = {
            nombre,
            categoria,
            descripcion,
            tecnologias: tecnologiasArray,
            horas: parseInt(horas),
            link,
            img, // Mantener la imagen anterior si no se selecciona una nueva
        };

        try {
            await serviceCursos.actualizarCurso(id, cursoData); // Servicio para actualizar curso
            setNotification({ type: 'success', message: 'Curso actualizado con éxito.' });
            navigate('/admin/cursos', { state: { notification: { type: 'success', message: 'Curso actualizado con éxito.' } } });
        } catch (error) {
            console.error('Error al actualizar el curso:', error);
            setNotification({ type: 'error', message: 'Error al actualizar el curso. Intente nuevamente.' });
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

            <h2 className="text-center mb-4 text-custom">Editar Curso</h2>
            <form onSubmit={handleSubmit} className="shadow-lg p-4 rounded bg-light">
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre del Curso</label>
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
                    <label htmlFor="categoria" className="form-label">Categoría</label>
                    <input
                        type="text"
                        className="form-control"
                        id="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
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
                <div className="mb-3">
                    <label htmlFor="tecnologias" className="form-label">Tecnologías (separadas por coma)</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tecnologias"
                        value={tecnologias}
                        onChange={(e) => setTecnologias(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="horas" className="form-label">Horas</label>
                    <input
                        type="number"
                        className="form-control"
                        id="horas"
                        value={horas}
                        onChange={(e) => setHoras(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="link" className="form-label">Link</label>
                    <input
                        type="url"
                        className="form-control"
                        id="link"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="img" className="form-label">Imagen</label>
                    <input
                        type="file"
                        className="form-control"
                        id="img"
                        accept="image/png, image/jpeg"
                        onChange={(e) => setImg(e.target.files[0]?.name || img)}
                    />
                    <small className="form-text text-muted">Si no seleccionas una nueva imagen, se mantendrá la actual.</small>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>
                        Cancelar
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Actualizar Curso
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditarCurso;
