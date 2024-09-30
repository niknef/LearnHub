import { Router } from "express";
import * as controller from "../controllers/cursos.controller.js"

const route = Router()

route.get( "/cursos", controller.getCursos ) // traemos todos los cursos

route.get( "/cursos/:id", controller.getCursoId ) // traemos el curso por id

route.post( "/cursos", controller.agregarCurso ) // agregamos un curso

route.patch("/cursos/:id", controller.actualizarCurso) // actualizamos un curso

route.delete("/cursos/:id", controller.eliminarCurso)  // eliminamos un curso   

export default route