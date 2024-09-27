import * as cursoService from "../services/cursos.service.js"
import * as cursoView from "../views/cursos.view.js"

export const getHome = (req, res) => {
    res.send(cursoView.crearPagina("Home", cursoView.crearHome()))
};

export const getCursos = (req, res) => {
    const filtros = req.query; // Obtenemos los filtros de la URL

    cursoService.getCursos(filtros) // Pasamos los filtros a la función getCursos
        .then(cursos => {
            res.send(cursoView.crearPagina("Listado de cursos", cursoView.crearCursos(cursos)))
        }).catch(error => {
            console.error(error);
            res.status(500).send("Error al obtener los cursos");
        });
}


export const getCursoId = (req, res) => {
    console.log("Params id",req.params.id)
    if(req.params.id !== undefined){
        cursoService.getCursoId(req.params.id)
            .then(curso => res.send(cursoView.crearPagina("Detalle", cursoView.detalleCurso(curso)) ) )
    }else{
        res.send("No se encontro el curso")
    }

}
