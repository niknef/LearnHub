import { categoriaSchema } from '../schemas/categorias.validate.js';

export async function validateCategoria(req, res, next){

    try {
        const datosValidados = await categoriaSchema.validate(req.body, {abortEarly: false, stripUnknown:true})
        // abortEarly: false para que muestre todos los errores y el stripUnknown:true para que elimine los campos desconocidos
        req.body = datosValidados
        next()
    } catch (error) {
        res.status(400).json({message:error.errors})
    }

}

