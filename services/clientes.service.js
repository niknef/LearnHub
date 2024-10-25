import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("AH20232CP1");


// Obtener todos los clientes (sin los eliminados)
export async function getClientes() {
    await client.connect();
    return db.collection("Clientes")
        .find({ eliminado: { $ne: true } }) // Filtra los clientes eliminados
        .toArray();
}

// Obtener un cliente por su ID
export async function getClienteId(id) {
    await client.connect();
    return db.collection("Clientes")
        .findOne({ _id: ObjectId.createFromHexString(id), eliminado: { $ne: true } }); // Excluye los eliminados
}

// Agregar nuevo cliente
export async function agregarCliente(cliente) {
    await client.connect();
    return db.collection("Clientes").insertOne(cliente);
}

export async function modificarCliente(id, datos) {
    await client.connect();
    const clienteModificado = await db.collection("Clientes").updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: datos });

    return clienteModificado;
}

// Actualizar cliente por su ID
export async function actualizarCliente(id, clienteModificado) {
    await client.connect();
    const clienteActualizado = await db.collection("Clientes").updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: clienteModificado });

    return clienteActualizado;
}

// Eliminar cliente (marcar como eliminado)
export async function eliminarCliente(id) {
    await client.connect();
    return db.collection("Clientes")
        .updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: { eliminado: true } });
}

export async function getCursos(filtros = {}) {
    const filterMongo = { eliminado: { $ne: true } };
    
    console.log(filtros)
    // Filtro por cliente
    if (filtros.clienteId !== undefined) {
        filterMongo.clienteId = { $eq: filtros.clienteId };
    }

    await client.connect();
    return db.collection("Cursos")
        .find(filterMongo)
        .toArray();
}


export async function agregarCursoCliente( idCliente, idCurso) {
    await client.connect();
    const curso = await db.collection("Cursos").findOne({ _id: ObjectId.createFromHexString(idCurso) });
    const resultado = await db.collection("Clientes").updateOne(
        { _id: ObjectId.createFromHexString(idCliente) },
        { $push: { cursos: curso } }
    );

    // Insertar el nuevo curso en la colección "Cursos"
    return resultado.modifiedCount > 0 ? "Curso agregado" : "No se agregó el curso";
}

