import { Router } from "express";
import * as controller from "../controllers/cursos.controller.js"

const route = Router()

route.get( "/cursos", controller.getCursos )
route.get( "/cursos/:id", controller.getCursoId )
route.post( "/cursos", controller.agregarCurso )
route.patch("/cursos/:id", controller.actualizarCurso)   
route.delete("/cursos/:id", controller.eliminarCurso)    

export default route