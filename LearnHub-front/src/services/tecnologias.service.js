import { call } from "./api.service"

export async function getTecnologias(){
    return call( { uri: "tecnologias" } )
}

export async function getTecnologia( id ){
    return call( { uri: `tecnologias/${id}` } )
}

export async function eliminarTecnologia(id) {
    return call({
        uri: `tecnologias/${id}`,
        method: "DELETE"
    });
}

export async function agregarTecnologia(data) {
    return call({
        uri: 'tecnologias',
        method: 'POST',
        body: data,
    });
}

export async function editarTecnologia(id, tecnologiaData) {
    return call({ uri: `tecnologias/${id}`, method: 'PATCH', body: tecnologiaData });
}