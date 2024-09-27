import * as cursoService from "../services/cursos.service.js"
import * as cursoView from "../views/cursos.view.js"

export const getHome = (req, res) => {
    res.send(cursoView.crearPagina("Home", cursoView.crearHome()))
};

export const getCursos = (req, res) => {
    cursoService.getCursos()
        .then(cursos => {
            res.send(cursoView.crearPagina("Listado de cursos", cursoView.crearCursos(cursos)))
        })
}

