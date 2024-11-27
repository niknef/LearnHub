import { MongoClient, ObjectId } from "mongodb"
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("AH20232CP1");

export async function getCursos(filtros = {}) {
    const filterMongo = { eliminado: { $ne: true } };
    const sortCriteria = {};

    // Si se pasa un profesorId en los filtros, lo aplicamos
    if (filtros.profesorId) {
        filterMongo["profesor.id"] = filtros.profesorId; // Usar notación de corchetes
    }

    // Otros filtros como categoría o duración
    if (filtros.categoria !== undefined) {
        filterMongo.categoria = { $eq: filtros.categoria };
    }
    if (filtros.ordenDuracion !== undefined) {
        const order = filtros.ordenDuracion.toLowerCase() === "asc" ? 1 : -1;
        sortCriteria.horas = order;
    }

    await client.connect();
    const cursos = await db.collection("Cursos")
        .find(filterMongo)
        .sort(sortCriteria)
        .toArray();

    return cursos;
}




export async function getCursoId(id_ingresado) {
    await client.connect();

    // Encontrar el curso
    const curso = await db.collection("Cursos").findOne({ _id: ObjectId.createFromHexString(id_ingresado) });
    if (!curso) return null;

    return curso;
}

export async function eliminarCurso(id_ingresado){
    await client.connect()
    await db.collection("Cursos").updateOne({ _id: ObjectId.createFromHexString(id_ingresado)}, { $set: {
        eliminado: true
    } })

    return id_ingresado
}

export async function modificarCurso(id_ingresado, datos){
    await client.connect()
    const cursoModificado = await db.collection("Cursos").updateOne({ _id: ObjectId.createFromHexString(id_ingresado)}, { $set: datos })

    return cursoModificado
}

export async function actualizarCurso(id, cursoModificado) {
    await client.connect()
    const cursoActualizado = await db.collection("Cursos").updateOne({_id: ObjectId.createFromHexString(id)}, { $set: cursoModificado })
    return cursoActualizado
}


export async function agregarCurso(curso, profesorId) {
    await client.connect();

    // Busco los datos completos del profesor utilizando el profesorId proporcionado
    const profesor = await db.collection("Profesores").findOne({ _id: new ObjectId(profesorId) });

    if (!profesor) {
        throw new Error("El profesor no existe");
    }

    // Agrego los datos del profesor al curso antes de insertarlo
    const cursoConProfesor = {
        ...curso,
        profesor: {
            id: profesor._id.toString(), // Convertir ObjectId a string
            user: profesor.user,
            foto: profesor.foto,
            bio: profesor.bio
        }
    };

    // Insertar el curso con los datos del profesor en la colección de Cursos
    const cursoInsertado = await db.collection("Cursos").insertOne(cursoConProfesor);

    return cursoInsertado;
}
