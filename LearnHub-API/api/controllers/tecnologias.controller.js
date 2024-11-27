import * as service from "../../services/tecnologias.service.js";

//funcion para traer muestros tecnologias
export function getTecnologias(req,res){
    const filtros = req.query;
    
    service.getTecnologias(filtros)
        .then( (tecnologias) => res.status(200).json(tecnologias) )
        .catch( (error) => res.status(500).json({error: error}) )
}

//funcion para traer una tecnologia por su id
export function getTecnologiaId(req, res){
    const id = req.params.id
    service.getTecnologiaId(id)
        .then( tecnologia => res.status(200).json(tecnologia) )
        .catch( (error) => res.status(500).json({error: error}) )
}

//funcion para eliminar una tecnologia por su id
export function eliminarTecnologia(req, res){
    const id = req.params.id
    service.eliminarTecnologia(id)
        .then( (id) => res.status(202).json({id: id}) )
        .catch( (error) => res.status(500).json({error: error}) )
}

//funcion para actualizar una tecnologia por su id
export function actualizarTecnologia(req, res){
    const id = req.params.id
    const tecnologia = req.body

    service.actualizarTecnologia(id, tecnologia)
        .then( tecnologia => {
            if( tecnologia ){
                res.status(201).json(tecnologia)
            }else{
                res.status(404).json({error: { message: "No se encuentra la tecnologia" }})
            }
        }
        )
        .catch( (error) => res.status(500).json({error: error}) )
}

//funcion para agregar una tecnologia
export function agregarTecnologia( req, res ){
    service.agregarTecnologia(req.body)
        .then( (tecnologia) => res.status(201).json(tecnologia) )
        .catch( (error) => res.status(500).json({error: error}) )
}
