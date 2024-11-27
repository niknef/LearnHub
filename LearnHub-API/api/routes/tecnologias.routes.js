import { Router } from "express";
import * as controller from "../controllers/tecnologias.controller.js"
import { validateTecnologia } from "../../middleware/tecnologias.validate.middleware.js"
import { validateToken } from "../../middleware/token.validate.middleware.js"

const route = Router()

route.get( "/tecnologias", [validateToken], controller.getTecnologias ) // traemos todas las tecnologias

route.get( "/tecnologias/:id", [validateToken], controller.getTecnologiaId ) // traemos la tecnologia por id

route.post( "/tecnologias", [validateToken, validateTecnologia], controller.agregarTecnologia ) // agregamos una tecnologia

route.patch("/tecnologias/:id",[validateToken], controller.actualizarTecnologia) // actualizamos una tecnologia

route.delete("/tecnologias/:id", [validateToken], controller.eliminarTecnologia)  // eliminamos una tecnologia

export default route