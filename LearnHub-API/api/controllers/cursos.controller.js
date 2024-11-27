import * as service from "../../services/cursos.service.js";

//funccion para traer muestros cursos  
export function getCursos(req, res) {
    const filtros = req.query;

    service.getCursos(filtros)
        .then((cursos) => res.status(200).json(cursos))
        .catch((error) => res.status(500).json({ error: error.message || "Error desconocido" }));
}


//funcion para traer un curso por su id
export function getCursoId(req, res){
    const id = req.params.id
    service.getCursoId(id)
        .then( curso => res.status(200).json(curso) )
        .catch( (error) => res.status(500).json({error: error}) )
}

//funcion para eliminar un curso por su id
export function eliminarCurso(req, res){
    const id = req.params.id
    service.eliminarCurso(id)
        .then( (id) => res.status(202).json({id: id}) )
        .catch( (error) => res.status(500).json({error: error}) )
}

//funcion para actualizar un curso por su id
export function actualizarCurso(req, res){
    const id = req.params.id
    const curso = req.body

    service.actualizarCurso(id, curso)
        .then( curso => {
            if( curso ){
                res.status(201).json(curso)
            }else{
                res.status(404).json({error: { message: "No se encuentra el curso" }})
            }
        }
        )
        .catch( (error) => res.status(500).json({error: error}) )
}

export function agregarCurso(req, res) {
    const { profesorId, ...cursoData } = req.body;

    service.agregarCurso(cursoData, profesorId)
        .then((curso) => res.status(201).json(curso))
        .catch((error) => {
            console.error("Error al agregar el curso:", error);
            res.status(500).json({ error: error.message || 'Error desconocido al agregar el curso' });
        });
}