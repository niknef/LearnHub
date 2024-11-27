import { MongoClient, ObjectId } from "mongodb";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import { crearToken } from "./token.service.js"
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("AH20232CP1");
const usuarios = db.collection("Usuarios");



export async function createUser(usuario){
    await client.connect();
    
    const existe = await usuarios.findOne({email: usuario.email});
    if(existe) throw new Error("El usuario ya existe");

    const nuevoUsuario = { ...usuario, passwordConfirm: undefined };
    
    nuevoUsuario.password = await bcrypt.hash(usuario.password, 10);


    await usuarios.insertOne(nuevoUsuario);
    return {...nuevoUsuario, password: undefined};
}

export async function login(usuario){
    await client.connect();

    const existe = await usuarios.findOne({email: usuario.email});
    if(!existe) throw new Error("El usuario no existe, por favor registrate");

    const match = await bcrypt.compare(usuario.password, existe.password);
    if(!match) throw new Error("Contraseña incorrecta");

    const token = await crearToken(existe)
    
    return { ...existe, token: token, password: undefined, passwordConfirm: undefined }
}

export async function getUser(id){
    await client.connect()

    const existe = await usuarios.findOne({ _id: new ObjectId(id) })

    if( !existe ) throw new Error( "No se pudo obtener el usuario" )

    return { ...existe, password: undefined }
}

