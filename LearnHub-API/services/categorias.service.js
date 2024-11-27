import { MongoClient, ObjectId } from "mongodb"
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("AH20232CP1");

export async function getCategorias(filtros = {}) {
    const filterMongo = { eliminado: { $ne: true } };
    
    await client.connect();
    return db.collection("Categorias")
        .find(filterMongo)
        .toArray();
}

export async function getCategoriaId(id_ingresado){
    await client.connect()
    console.log("id recibido", id_ingresado)
    const datos = await db.collection("Categorias").findOne( { _id: ObjectId.createFromHexString(id_ingresado) } )  
    return datos 
}

export async function eliminarCategoria(id_ingresado){
    await client.connect()
    await db.collection("Categorias").updateOne({ _id: ObjectId.createFromHexString(id_ingresado)}, { $set: {
        eliminado: true
    } })

    return id_ingresado
}

export async function modificarCategoria(id_ingresado, datos){
    await client.connect()
    const categoriaModificado = await db.collection("Categorias").updateOne({ _id: ObjectId.createFromHexString(id_ingresado)}, { $set: datos })

    return categoriaModificado
}

export async function actualizarCategoria(id, categoriaModificado) {
    await client.connect()
    const categoriaActualizado = await db.collection("Categorias").updateOne({_id: ObjectId.createFromHexString(id)}, { $set: categoriaModificado })
    return categoriaActualizado
}

export async function agregarCategoria(categoria){
    await client.connect()
    const categoriaAgregado = await db.collection("Categorias").insertOne(categoria)
    return categoriaAgregado
}

