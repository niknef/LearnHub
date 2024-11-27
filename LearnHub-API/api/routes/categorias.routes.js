import { Router } from "express";
import * as controller from "../controllers/categorias.controller.js"
import { validateCategoria } from "../../middleware/categorias.validate.middleware.js"
import { validateToken } from "../../middleware/token.validate.middleware.js"

const route = Router()

route.get( "/categorias", [validateToken], controller.getCategorias ) // traemos todas las categorias

route.get( "/categorias/:id", [validateToken], controller.getCategoriaId ) // traemos la categoria por id

route.post( "/categorias", [validateToken, validateCategoria] , controller.agregarCategoria ) // agregamos una categoria

route.patch("/categorias/:id", [validateToken],  controller.actualizarCategoria) // actualizamos una categoria

route.delete("/categorias/:id", [validateToken] , controller.eliminarCategoria)  // eliminamos una categoria

export default route