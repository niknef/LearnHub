import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("AH20232CP1");

// Obtener todos los profesores con datos de usuario (sin los eliminados)
export async function getProfesores() {
    await client.connect();

    // Obtener todos los profesores sin los eliminados
    const profesores = await db.collection("Profesores")
        .find({ eliminado: { $ne: true } })
        .toArray();

    return profesores;
}
// Obtener un profesor por su ID, incluyendo datos de usuario
export async function getProfesorId(id) {
    await client.connect();

    // Buscar el profesor por ID y verificar que no esté eliminado
    const profesor = await db.collection("Profesores")
        .findOne({ _id: new ObjectId(id), eliminado: { $ne: true } });

    return profesor || null;
}


export async function agregarProfesor(profesor) {
    await client.connect();

    // Verificar que el userId existe y tiene el rol de "profesor"
    const usuario = await db.collection("Usuarios").findOne({ _id: new ObjectId(profesor.userId) });

    if (!usuario) {
        throw new Error("El usuario no existe");
    }

    if (usuario.role !== "profesor") {
        throw new Error("El usuario no tiene el rol de profesor");
    }

    // Crear el objeto `profesor` con la estructura completa
    const profesorConDatosCompletos = {
        ...profesor,
        user: {
            id: usuario._id,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            email: usuario.email,
            role: usuario.role
        }
    };

    // Insertar el documento completo en la colección Profesores
    const resultadoProfesor = await db.collection("Profesores").insertOne(profesorConDatosCompletos);

    // Actualizar el usuario con el profesorId
    await db.collection("Usuarios").updateOne(
        { _id: usuario._id },
        { $set: { profesorId: resultadoProfesor.insertedId } }
    );

    return resultadoProfesor;
}


// Modificar Profesor
export async function modificarProfesor(id, datos) {
    await client.connect();
    const profesorModificado = await db.collection("Profesores").updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: datos });

    return profesorModificado;
}

// Actualizar Profesor por su ID
export async function actualizarProfesor(id, profesorModificado) {
    await client.connect();
    const profesorActualizado = await db.collection("Profesores").updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: profesorModificado });

    return profesorActualizado;
}

// Eliminar Profesor (marcar como eliminado)
export async function eliminarProfesor(id) {
    await client.connect();
    return db.collection("Profesores")
        .updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: { eliminado: true } });
}


