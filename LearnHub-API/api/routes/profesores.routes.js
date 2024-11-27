import { Router } from "express";
import * as controller from "../controllers/profesores.controller.js"
import { validateProfesor} from "../../middleware/profesores.validate.middleware.js"
import { validateToken } from "../../middleware/token.validate.middleware.js"

const route = Router()

route.get( "/profesores",[validateToken], controller.getProfesores ) // traemos todos los profesores

route.get( "/profesores/:id",[validateToken], controller.getProfesorId ) // traemos el Profesor por id

route.post( "/profesores", [validateToken, validateProfesor], controller.agregarProfesor ) // agregamos un Profesor

route.patch("/profesores/:id", [validateToken],controller.actualizarProfesor) // actualizamos un Profesor

route.delete("/profesores/:id", [validateToken],controller.eliminarProfesor) // eliminamos un Profesor


export default route