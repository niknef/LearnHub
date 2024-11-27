export async function call( { uri, method = "GET", body = undefined } ){
    return fetch( `http://localhost:3333/api/${uri}`,{
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token")
        },
        method,
        body: JSON.stringify(body)
    } )
    .then( async response => {
        if( !response.ok ){
            if( response.status === 401 ){
                localStorage.removeItem("token")
            }

            throw await response.json()
        }
        return response.json()
    } )
}

export async function getProfesorByUsuarioId(usuarioId) {
    await client.connect();

    // Buscar el profesor relacionado al usuarioId
    const profesor = await db.collection("Profesores").findOne({ "user.id": usuarioId });

    if (!profesor) {
        throw new Error("No se encontró un profesor para este usuario");
    }

    return profesor._id; // Retorna solo el ID del profesor
}
