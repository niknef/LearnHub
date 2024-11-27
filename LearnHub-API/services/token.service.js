import jwt from 'jsonwebtoken';
import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("AH20232CP1");
const tokens = db.collection("Tokens")

//Clave secreta para firmar los tokens
const SECRET_KEY = process.env.SECRET_KEY;

export async function crearToken(usuario) {
    const token = jwt.sign({...usuario, password: undefined, passwordConfirm: undefined}, SECRET_KEY, {
        expiresIn: "2h" //24 horas
    })

    await client.connect()

    await tokens.insertOne({ token: token, usuario_id: usuario._id })

    const payload = jwt.verify(token, SECRET_KEY)
    console.log(payload.exp, new Date().getTime() / 1000)

    return token
}

export async function validarToken(token) {
    try {        
        const payload = jwt.verify(token, SECRET_KEY)
        const sessionActiva = await tokens.findOne({ token, usuario_id: new ObjectId(payload._id) })
        if( !sessionActiva ) throw new Error("Token invalido")
        //iat: fecha de creacion del token
        //exp: fecha de expiracion del token
        if( payload.exp < (new Date().getTime() / 1000) ) throw new Error("Token expirado")
        return payload
    } catch (error) {
        throw new Error("Token invalido")
    }
}