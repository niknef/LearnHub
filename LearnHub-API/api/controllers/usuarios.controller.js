import * as service from '../../services/usuarios.service.js';

export function createUser(req, res) {
    service.createUser(req.body)
        .then((usuario) => res.status(201).json(usuario))
        .catch((error) => {
            const errorMessage = error.message || "Error al crear el usuario";
            res.status(400).json({ error: errorMessage });
        });
}

export function login(req,res){
    service.login(req.body)
        .then( (usuario) => res.status(200).json(usuario) )
        .catch((error) => {
            const errorMessage = error.message || "Error al logearse";
            res.status(400).json({ error: errorMessage });
        });
}


// Obtener todos los usuarios
export function getUsuarios(req, res){
    const filtros = req.query;

    service.getUsuarios(filtros)
        .then((usuarios) => res.status(200).json(usuarios))
        .catch((error) => res.status(500).json({ error: error }));
};

export function getUser(req, res) {
    service.getUser(req.params.id)
        .then((usuario) => res.status(200).json(usuario))
        .catch((error) => res.status(500).json({ error: error }));
};


export async function actualizarUsuario(req, res) {
    try {
        const { id } = req.params;
        const { role } = req.body;

        if (!role) {
            return res.status(400).json({ message: "El rol es obligatorio" });
        }

        const usuarioActualizado = await service.actualizarUsuario(id, { role });

        if (!usuarioActualizado) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.status(200).json({ message: "Rol actualizado con éxito" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
