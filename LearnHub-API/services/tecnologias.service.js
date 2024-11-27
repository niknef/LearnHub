import { MongoClient, ObjectId } from "mongodb"
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("AH20232CP1");

export async function getTecnologias(filtros = {}) {
    const filterMongo = { eliminado: { $ne: true } };
    
    await client.connect();
    return db.collection("Tecnologias")
        .find(filterMongo)
        .toArray();
}

export async function getTecnologiaId(id_ingresado){
    await client.connect()
    console.log("id recibido", id_ingresado)
    const datos = await db.collection("Tecnologias").findOne( { _id: ObjectId.createFromHexString(id_ingresado) } )  
    return datos 
}

export async function eliminarTecnologia(id_ingresado){
    await client.connect()
    await db.collection("Tecnologias").updateOne({ _id: ObjectId.createFromHexString(id_ingresado)}, { $set: {
        eliminado: true
    } })

    return id_ingresado
}

export async function modificarTecnologia(id_ingresado, datos){
    await client.connect()
    const tecnologiaModificado = await db.collection("Tecnologias").updateOne({ _id: ObjectId.createFromHexString(id_ingresado)}, { $set: datos })

    return tecnologiaModificado
}

export async function actualizarTecnologia(id, tecnologiaModificado) {
    await client.connect()
    const tecnologiaActualizado = await db.collection("Tecnologias").updateOne({_id: ObjectId.createFromHexString(id)}, { $set: tecnologiaModificado })
    return tecnologiaActualizado
}

export async function agregarTecnologia(tecnologia){
    await client.connect()
    const tecnologiaAgregado = await db.collection("Tecnologias").insertOne(tecnologia)
    return tecnologiaAgregado
}

