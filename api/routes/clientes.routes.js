import { Router } from "express";
import * as controller from "../controllers/clientes.controller.js"

const route = Router()

route.get( "/clientes", controller.getClientes ) // traemos todos los clientes

route.get( "/clientes/:id", controller.getClienteId ) // traemos el cliente por id

route.post( "/clientes", controller.agregarCliente ) // agregamos un cliente

route.patch("/clientes/:id", controller.actualizarCliente) // actualizamos un cliente

route.delete("/clientes/:id", controller.eliminarCliente) // eliminamos un cliente

export default route