import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient("mongodb://localhost:27017")
const db = client.db("AH20232CP1")

export async function getCursos(filtros = {}) {
    const filterMongo = { eliminado: { $ne: true } };
    console.log(filtros)
    // Filtro por categoría
    if (filtros.categoria !== undefined) {
        filterMongo.categoria = { $eq: filtros.categoria };
    }


    await client.connect();
    return db.collection("Cursos").find(filterMongo).toArray();
}


export async function getCursoId(id_ingresado){
    await client.connect()
    console.log("id recibido", id_ingresado)
    const datos = await db.collection("Cursos").findOne( { _id: ObjectId.createFromHexString(id_ingresado) } )  
    return datos 
}

