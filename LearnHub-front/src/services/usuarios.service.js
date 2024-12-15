import { call } from "./api.service"

export async function getUsuarios(){
    return call( { uri: "usuarios" } )
}
export async function actualizarUsuario(id, data) {
    return call({
        uri: `usuarios/${id}`,
        method: "PATCH",
        body: data,
    });
}
