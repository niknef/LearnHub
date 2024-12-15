import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as serviceProfesores from '../../services/profesores.service';
import Notification from '../Notificaciones/Notification';

const AgregarProfesor = ({ userId }) => {
    const [bio, setBio] = useState('');
    const [foto, setFoto] = useState(null);
    const [notification, setNotification] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const profesorData = {
            userId,
            bio,
            foto: foto ? foto.name : "user.png", // Usa el nombre del archivo o una imagen por defecto
        };

        try {
            await serviceProfesores.agregarProfesor(profesorData); // Usa el servicio para enviar los datos
            setNotification({ type: "success", message: "Profesor agregado con éxito." });
            navigate('/admin/usuarios', { state: { notification: { type: "success", message: "Profesor agregado con éxito." } } });
        } catch (error) {
            console.error("Error al agregar el profesor:", error);
            setNotification({ type: "error", message: "Error al agregar el profesor. Intente nuevamente." });
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

            <h2 className="text-center mb-4 text-custom">Agregar Profesor</h2>
            <form onSubmit={handleSubmit} className="shadow-lg p-4 rounded bg-light">
                <div className="mb-3">
                    <label htmlFor="bio" className="form-label">Biografía</label>
                    <textarea
                        className="form-control"
                        id="bio"
                        name = "bio"
                        rows="3"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="foto" className="form-label">Foto</label>
                    <input
                        type="file"
                        className="form-control"
                        id="foto"
                        accept="image/png, image/jpeg"
                        onChange={(e) => setFoto(e.target.files[0])}
                    />
                    <small className="form-text text-muted">Si no seleccionas una foto, se usará la predeterminada.</small>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>
                        Cancelar
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Agregar Profesor
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AgregarProfesor;
