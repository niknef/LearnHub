import React, { useState, useEffect } from 'react';
import UsuariosTable from './UsuariosTable';
import AgregarProfesor from './AgregarProfesor'; // Importamos el nuevo componente
import { useNavigate } from 'react-router-dom';
import * as serviceUsuarios from '../../services/usuarios.service';
import Notification from '../Notificaciones/Notification';

const AdminUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [notification, setNotification] = useState(null);
    const [selectedUserId, setSelectedUserId] = useState(null); // Nuevo estado para manejar el usuario seleccionado
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const data = await serviceUsuarios.getUsuarios();
                setUsuarios(data);
            } catch (error) {
                console.error("Error al obtener los usuarios:", error);
            }
        };
        fetchUsuarios();
    }, []);

    const handlePromoteToProfesor = async (id) => {
        try {
            await serviceUsuarios.actualizarUsuario(id, { role: "profesor" });
            setUsuarios((prev) =>
                prev.map((user) =>
                    user._id === id ? { ...user, role: "profesor" } : user
                )
            );
            setNotification({ type: "success", message: "Rol actualizado con éxito." });
        } catch (error) {
            setNotification({ type: "error", message: "Error al actualizar el rol." });
            console.error("Error al actualizar el rol:", error);
        }
    };

    const handleAddProfesor = (id) => {
        setSelectedUserId(id); // Configuramos el usuario seleccionado para agregar profesor
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
            <h2 className="text-center mb-4 text-custom">Administrar Usuarios</h2>
            {!selectedUserId ? (
                <UsuariosTable
                    data={usuarios}
                    onPromoteToProfesor={handlePromoteToProfesor}
                    onAddProfesor={handleAddProfesor} // Pasamos la función para agregar profesor
                />
            ) : (
                <AgregarProfesor
                    userId={selectedUserId}
                    onClose={() => setSelectedUserId(null)} // Función para volver a la tabla de usuarios
                    setNotification={setNotification} // Para mostrar notificaciones
                />
            )}
        </div>
    );
};

export default AdminUsuarios;
