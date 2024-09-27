import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient("mongodb://localhost:27017")
const db = client.db("AH20232CP1")

export async function getCursos(){
    await client.connect()
    console.log()
    const cursos = await db.collection("Cursos").find().toArray()
    console.log(cursos);
    return cursos
}

