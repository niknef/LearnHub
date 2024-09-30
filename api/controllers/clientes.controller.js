import * as service from "../../services/clientes.service.js";

//funcion para traer los clientes
export function getClientes(req,res){
    service.getClientes()
        .then( (clientes) => res.status(200).json(clientes) )
        .catch( (error) => res.status(500).json({error: error}) )
}

//funcion para agregar un cliente
export function agregarCliente( req, res ){
    service.agregarCliente(req.body)
        .then( (cliente) => res.status(201).json(cliente) )
        .catch( (error) => res.status(500).json({error: error}) )
}

//funcion para traer un cliente por su id
export function getClienteId(req, res){
    const id = req.params.id
    service.getClienteId(id)
        .then( cliente => res.status(200).json(cliente) )
        .catch( (error) => res.status(500).json({error: error}) )
}

//funcion para actualizar un cliente por su id
export function actualizarCliente(req, res){
    const id = req.params.id
    const cliente = req.body

    service.actualizarCliente(id, cliente)
        .then( cliente => {
            if( cliente ){
                res.status(200).json(cliente)
            }else{
                res.status(404).json({error: { message: "No se encuentra el cliente" }})
            }
        }
        )
        .catch( (error) => res.status(500).json({error: error}) )
}

//funcion para eliminar un cliente por su id
export function eliminarCliente(req, res){
    const id = req.params.id
    service.eliminarCliente(id)
        .then( (id) => res.status(202).json({id: id}) )
        .catch( (error) => res.status(500).json({error: error}) )
}
