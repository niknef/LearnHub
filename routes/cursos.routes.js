import express from "express"
import * as controllerCurso from "../controllers/cursos.controller.js"

const route = express.Router()

route.get("/", controllerCurso.getHome);
route.get("/cursos", controllerCurso.getCursos)
route.get("/cursos/nuevo", controllerCurso.nuevoCurso)
route.post("/cursos/nuevo", controllerCurso.agregarCurso)
route.get("/cursos/modificar/:id", controllerCurso.modificarCurso)
route.post("/cursos/modificar/:id", controllerCurso.actualizarCurso)
route.get("/cursos/eliminar/:id", controllerCurso.eliminarCurso)
route.get("/cursos/:id", controllerCurso.getCursoId)

export default route