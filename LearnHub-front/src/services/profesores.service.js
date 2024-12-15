import { call } from "./api.service";

export async function getProfesores() {
    return call({ uri: "profesores" });
}

export async function getProfesor(id) {
    return call({ uri: `profesores/${id}` });
}

export async function agregarProfesor(profesor) {
    return call({
        uri: "profesores",
        method: "POST",
        body: profesor,
    });
}
