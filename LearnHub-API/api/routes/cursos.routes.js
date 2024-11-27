import { Router } from "express";
import * as controller from "../controllers/cursos.controller.js"
import { validateCurso } from "../../middleware/cursos.validate.middleware.js"
import { validateToken } from "../../middleware/token.validate.middleware.js"

const route = Router()

route.get( "/cursos",[validateToken], controller.getCursos ) // traemos todos los cursos

route.get( "/cursos/:id", [validateToken], controller.getCursoId ) // traemos el curso por id

route.post( "/cursos", [validateToken, validateCurso], controller.agregarCurso ) // agregamos un curso

route.patch("/cursos/:id", [validateToken], controller.actualizarCurso) // actualizamos un curso

route.delete("/cursos/:id", [validateToken], controller.eliminarCurso)  // eliminamos un curso   

export default route