import { call } from "./api.service"

export async function getCursos(){
    return call( { uri: "cursos" } )
}

export async function getCurso( id ){
    return call( { uri: `cursos/${id}` } )
}

export async function getCursosPorProfesor(profesorId) {
    return call({ uri: `cursos?profesorId=${profesorId}` });
}

export async function eliminarCurso(id) {
    return call({
        uri: `cursos/${id}`,
        method: "DELETE",
    });
}

export async function agregarCurso(formData) {
    const response = await call({
        uri: "cursos",
        method: "POST",
        headers: {}, // No enviar `Content-Type`, el navegador lo maneja
        body: formData,
    });

    return response;
}

export async function actualizarCurso(id, cursoData) {
    return call({
        uri: `cursos/${id}`,
        method: 'PATCH',
        body: cursoData,
    });
}
