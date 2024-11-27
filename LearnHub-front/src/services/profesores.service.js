import { call } from "./api.service"

export async function getProfesores(){
    return call( { uri: "profesores" } )
}

export async function getProfesor( id ){
    return call( { uri: `profesores/${id}` } )
}