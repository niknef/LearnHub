import express from "express"
import * as controllerCurso from "../controllers/cursos.controller.js"

const route = express.Router()

route.get("/", controllerCurso.getHome);

export default route