import * as service from "../../services/profesores.service.js";

//funcion para traer los Profesores
export function getProfesores(req,res){
    service.getProfesores()
        .then( (profesores) => res.status(200).json(profesores) )
        .catch( (error) => res.status(500).json({error: error}) )
}

//funcion para agregar un Profesor
export function agregarProfesor( req, res ){
    service.agregarProfesor(req.body)
        .then( (profesor) => res.status(201).json(profesor) )
        .catch( (error) => res.status(500).json({error: error}) )
}

//funcion para traer un Profesor por su id
export function getProfesorId(req, res){
    const id = req.params.id
    service.getProfesorId(id)
        .then( profesor => res.status(200).json(profesor) )
        .catch( (error) => res.status(500).json({error: error}) )
}

//funcion para actualizar un Profesor por su id
export function actualizarProfesor(req, res){
    const id = req.params.id
    const profesor = req.body

    service.actualizarProfesor(id, profesor)
        .then( profesor => {
            if( profesor ){
                res.status(200).json(profesor)
            }else{
                res.status(404).json({error: { message: "No se encuentra el Profesor" }})
            }
        }
        )
        .catch( (error) => res.status(500).json({error: error}) )
}

//funcion para eliminar un Profesor por su id
export function eliminarProfesor(req, res){
    const id = req.params.id
    service.eliminarProfesor(id)
        .then( (id) => res.status(202).json({id: id}) )
        .catch( (error) => res.status(500).json({error: error}) )
}


