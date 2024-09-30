import * as clienteService from "../services/clientes.service.js"; // Importar el servicio de clientes
import * as cursoService from "../services/cursos.service.js"; // Importar el servicio de cursos
import * as clienteView from "../views/clientes.view.js"; // Importar las vistas de clientes
import * as cursoView from "../views/cursos.view.js"; // Importar las vistas de cursos

// Obtener todos los clientes
export const getClientes = (req, res) => {
    clienteService.getClientes() // Llama al servicio para obtener los clientes
        .then(clientes => {
            res.send(cursoView.crearPagina("Listado de Clientes", clienteView.crearCardsClientes(clientes)));
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Error al obtener los clientes");
        });
};

// Mostrar formulario para crear nuevo cliente
export const nuevoCliente = (req, res) => {
    res.send(cursoView.crearPagina("Nuevo Cliente", clienteView.crearClienteNuevo()));
};

// Agregar nuevo cliente
export const agregarCliente = (req, res) => {
    const cliente = req.body;
    
    clienteService.agregarCliente(cliente)
        .then(() => res.redirect("/clientes"))
        .catch(error => {
            console.error(error);
            res.status(500).send("Error al agregar cliente");
        });
};


// Mostrar formulario para modificar un cliente
export const modificarCliente = (req, res) => {
    const id = req.params.id;

    clienteService.getClienteId(id)
        .then(cliente => res.send(cursoView.crearPagina("Modificar Cliente", clienteView.modificarCliente(cliente))))
        .catch(error => {
            console.error(error);
            res.status(500).send("Error al cargar el cliente");
        });
};

// Actualizar cliente
export const actualizarCliente = (req, res) => {
    const id = req.params.id;
    const clienteActualizado = req.body;

    clienteService.actualizarCliente(id, clienteActualizado)
        .then(() => res.redirect("/clientes"))
        .catch(error => {
            console.error(error);
            res.status(500).send("Error al actualizar cliente");
        });
};

// Eliminar cliente (marcar como eliminado)
export const eliminarCliente = (req, res) => {
    const clientId = req.params.id;
    clienteService.eliminarCliente(clientId)
        .then(() => res.redirect("/clientes"))
        .catch(error => {
            console.error(error);
            res.status(500).send("Error al eliminar cliente");
        });
};

// Obtener cursos asociados a un cliente
export const getCursosPorCliente = (req, res) => {
    const filtros = req.query;
    const clienteId = req.query.id;

    clienteService.getCursos(filtros)
        .then(cursos => {
            res.send(cursoView.crearPagina("Cursos del Cliente", clienteView.crearCursos(cursos, clienteId)));
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Error al obtener los cursos del cliente");
        });
};

// Mostrar el formulario para crear un curso desde un cliente
export const nuevoCursoACliente = (req, res) => {
    const clienteId = req.query.clienteId;  // Obtenemos el clienteId desde la query string
    
    clienteService.getClienteId(clienteId)
        .then(cliente => {
            if (!cliente) {
                return res.status(404).send("Cliente no encontrado");
            }
            
            // Renderizar la vista con el formulario
            res.send(cursoView.crearPagina("Agregar Curso desde cliente", clienteView.crearCursoNuevo(cliente)));
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Error al obtener el cliente");
        });
};

// Procesar el formulario para agregar un curso a un cliente
export const agregarCursoACliente = (req, res) => {
    const clienteId = req.body.clienteId;  // Obtenemos el clienteId desde el formulario
    const curso = {
        ...req.body,
        clienteId,  // Aseguramos que el clienteId se incluya en el curso
        horas: Number(req.body.horas),  // Convertimos las horas a número
    };

    // Paso 1: Crear el curso en la base de datos
    cursoService.agregarCurso(curso)
        .then(() => {
            // Redirigir a la vista de clientes o a otro destino
            res.redirect("/clientes");  // Redirigimos a la vista del cliente
        })
        .catch(error => {
            console.error(error);
            res.status(500).send("Error al agregar curso al cliente");
        });
};