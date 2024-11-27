import * as service from "../../services/categorias.service.js";

//funcion para traer muestros categorias
export function getCategorias(req,res){
    const filtros = req.query;
    
    service.getCategorias(filtros)
        .then( (categorias) => res.status(200).json(categorias) )
        .catch( (error) => res.status(500).json({error: error}) )
}

//funcion para traer una categoria por su id
export function getCategoriaId(req, res){
    const id = req.params.id
    service.getCategoriaId(id)
        .then( categoria => res.status(200).json(categoria) )
        .catch( (error) => res.status(500).json({error: error}) )
}

//funcion para eliminar una categoria por su id
export function eliminarCategoria(req, res){
    const id = req.params.id
    service.eliminarCategoria(id)
        .then( (id) => res.status(202).json({id: id}) )
        .catch( (error) => res.status(500).json({error: error}) )
}

//funcion para actualizar una categoria por su id
export function actualizarCategoria(req, res){
    const id = req.params.id
    const categoria = req.body

    service.actualizarCategoria(id, categoria)
        .then( categoria => {
            if( categoria ){
                res.status(201).json(categoria)
            }else{
                res.status(404).json({error: { message: "No se encuentra la categoria" }})
            }
        }
        )
        .catch( (error) => res.status(500).json({error: error}) )
}

//funcion para agregar una categoria
export function agregarCategoria( req, res ){
    service.agregarCategoria(req.body)
        .then( (categoria) => res.status(201).json(categoria) )
        .catch( (error) => res.status(500).json({error: error}) )
}