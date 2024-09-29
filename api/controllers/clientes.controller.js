import * as service from "../../services/clientes.service.js";

export function getClientes(req,res){
    service.getClientes()
        .then( (clientes) => res.status(200).json(clientes) )
        .catch( (error) => res.status(500).json({error: error}) )
}

export function agregarCliente( req, res ){
    service.agregarCliente(req.body)
        .then( (cliente) => res.status(201).json(cliente) )
        .catch( (error) => res.status(500).json({error: error}) )
}

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

export function eliminarCliente(req, res){
    const id = req.params.id
    service.eliminarCliente(id)
        .then( (id) => res.status(202).json({id: id}) )
        .catch( (error) => res.status(500).json({error: error}) )
}
