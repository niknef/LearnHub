import { call } from "./api.service"

export async function getCategorias(){
    return call( { uri: "categorias" } )
}

export async function getCategoria( id ){
    return call( { uri: `categorias/${id}` } )
}

export async function eliminarCategoria(id) {
    return call({
        uri: `categorias/${id}`,
        method: "DELETE"
    });
}

export async function agregarCategoria(data) {
    return call({
        uri: 'categorias',
        method: 'POST',
        body: data,
    });
}

export async function actualizarCategoria(id, categoriaData) {
    return call({
        uri: `categorias/${id}`,
        method: 'PATCH',
        body: categoriaData,
    });
}