import express from "express";
import * as controllerCliente from "../controllers/clientes.controller.js";

const route = express.Router();

// Rutas para manejar los clientes

route.get("/clientes", controllerCliente.getClientes); // Obtener todos los clientes

// Rutas para gestionar un cliente
route.get("/clientes/nuevo", controllerCliente.nuevoCliente); // Mostrar formulario para nuevo cliente
route.post("/clientes/nuevo", controllerCliente.agregarCliente); // Crear nuevo cliente

// Rutas para gestionar los cursos asociados a un cliente
route.get("/clientes/cursos", controllerCliente.getCursosPorCliente); 

// Rutas para gestionar los cursos asociados a un cliente
route.get("/clientes/cursos/nuevo", controllerCliente.nuevoCursoACliente); // Mostrar formulario para vincular curso a cliente
route.post("/clientes/cursos/nuevo", controllerCliente.agregarCursoACliente); // Vincular curso a un cliente

route.get("/clientes/modificar/:id", controllerCliente.modificarCliente); // Mostrar formulario para modificar cliente
route.post("/clientes/modificar/:id", controllerCliente.actualizarCliente); // Actualizar cliente

route.get("/clientes/eliminar/:id", controllerCliente.eliminarCliente); // Eliminar cliente



export default route;
