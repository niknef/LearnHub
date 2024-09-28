import * as cursoService from "../services/cursos.service.js"
import * as cursoView from "../views/cursos.view.js"

export const getHome = (req, res) => {
    res.send(cursoView.crearPagina("Home", cursoView.crearHome()))
};

export const getCursos = (req, res) => {
    const filtros = req.query; // Obtenemos los filtros de la URL
    const categoria = req.query.categoria || undefined; // Captura la categoría de la query

    cursoService.getCursos(filtros) // Pasamos los filtros a la función getCursos
        .then(cursos => {
            res.send(cursoView.crearPagina("Listado de cursos", cursoView.crearCursos(cursos, categoria)))
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

export const eliminarCurso = (req, res) => {
    cursoService.elminarCurso(req.params.id)
        .then( ( id ) => res.redirect("/cursos") )
        .catch( (err) => res.send(cursoView.crearPagina("Error Al eliminar un curso", `<p>${err}</p>`)) )
}

export const modificarCurso = (req, res) => {
    const id_ingresado = req.params.id;
    cursoService.getCursoId(id_ingresado)
        .then(curso => res.send(cursoView.crearPagina("Modificar Curso", cursoView.modificarCurso(curso))))
        .catch((err) => res.send(cursoView.crearPagina("Error Al modificar un curso", `<p>${err}</p>`)));
};

export const actualizarCurso = (req, res) => {
    const id = req.params.id;

    const cursoActualizado = {
        ...req.body,
        horas: Number(req.body.horas)  
    };

    cursoService.actualizarCurso(id, cursoActualizado)
        .then(() => res.redirect("/cursos"))
        .catch((err) => res.send(cursoView.crearPagina("Error Al modificar un curso", `<p>${err}</p>`)));
};
export const nuevoCurso = (req, res) => {
    res.send( cursoView.crearPagina("Nuevo Curso", cursoView.crearCursoNuevo() ) )
}


export const agregarCurso = (req, res) => {
    const curso = {
        ...req.body,
        horas: Number(req.body.horas), 
    };

    cursoService.agregarCurso(curso)
    .then( (curso) => res.redirect("/cursos") )
    .catch( (err) => res.send(cursoView.crearPagina("Error Al agregar un curso", `<p>${err}</p>`)) );
}
