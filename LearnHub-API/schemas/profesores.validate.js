import yup from 'yup';

export const profesorSchema = yup.object({
    userId: yup.string()
        .required("El ID del usuario es obligatorio")
        .matches(/^[a-f\d]{24}$/i, "El ID del usuario debe ser una cadena de 24 caracteres hexadecimales"),
    
    foto: yup.string()
        .required("La foto es obligatoria")
        .matches(/\.(jpg|jpeg|png)$/, "La foto debe tener un formato jpg, jpeg o png"),
    
    bio: yup.string()
        .required("La biografía es obligatoria")
        .min(10, "La biografía debe tener al menos 10 caracteres")
});