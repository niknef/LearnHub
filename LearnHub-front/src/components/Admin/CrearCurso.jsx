import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as serviceCursos from '../../services/cursos.service';
import Notification from '../Notificaciones/Notification';
import { jwtDecode } from 'jwt-decode';

const CrearCurso = () => {
    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tecnologias, setTecnologias] = useState('');
    const [horas, setHoras] = useState('');
    const [link, setLink] = useState('');
    const [img, setImg] = useState(null);
    const [notification, setNotification] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No se encontró el token");
            navigate("/login");
            return;
        }

        let profesorId;
        try {
            const decoded = jwtDecode(token);
            profesorId = decoded.profesorId;

            if (!profesorId) {
                setNotification({ type: "error", message: "El ID del profesor no se encuentra en el token." });
                return;
            }
        } catch (error) {
            console.error("Error al decodificar el token:", error);
            setNotification({ type: "error", message: "Error con el token de autenticación." });
            return;
        }

        const tecnologiasArray = tecnologias.split(',').map((tec) => tec.trim());
        const cursoData = {
            nombre,
            categoria,
            descripcion,
            tecnologias: tecnologiasArray,
            horas: parseInt(horas),
            link,
            img: img ? img.name : "data_science.jpg", // Usa el nombre del archivo o un valor por defecto
            profesorId,
        };

        try {
            await serviceCursos.agregarCurso(cursoData); // Usa el servicio para enviar los datos
            setNotification({ type: "success", message: "Curso creado con éxito." });
            navigate('/admin/cursos', { state: { notification: { type: "success", message: "Curso creado con éxito." } } });
        } catch (error) {
            console.error("Error al crear el curso:", error);
            setNotification({ type: "error", message: "Error al crear el curso. Intente nuevamente." });
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

            <h2 className="text-center mb-4 text-custom">Crear Nuevo Curso</h2>
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
                        onChange={(e) => setImg(e.target.files[0])}
                    />
                    <small className="form-text text-muted">Si no seleccionas una imagen, se usará la predeterminada.</small>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>
                        Cancelar
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Crear Curso
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CrearCurso;
