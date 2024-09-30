import express from "express"
import * as controllerCurso from "../controllers/cursos.controller.js"

const route = express.Router()

// Rutas para manejar los cursos

route.get("/", controllerCurso.getHome); // Página de inicio
route.get("/cursos", controllerCurso.getCursos) // Obtener todos los cursos
route.get("/cursos/nuevo", controllerCurso.nuevoCurso) // Mostrar formulario para nuevo curso
route.post("/cursos/nuevo", controllerCurso.agregarCurso) // Crear nuevo curso
route.get("/cursos/modificar/:id", controllerCurso.modificarCurso) // Mostrar formulario para modificar curso
route.post("/cursos/modificar/:id", controllerCurso.actualizarCurso) // Actualizar curso
route.get("/cursos/eliminar/:id", controllerCurso.eliminarCurso) // Eliminar curso
route.get("/cursos/:id", controllerCurso.getCursoId) // Traer un curso por id

export default route