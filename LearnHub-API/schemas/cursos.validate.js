import yup from 'yup';

export const cursoSchema = yup.object({
    nombre: yup.string()
        .required("El nombre del curso es obligatorio")
        .min(5, "El nombre del curso debe tener al menos 5 caracteres"),
    
    profesorId: yup.string()
        .required("El ID del profesor es obligatorio")
        .matches(/^[a-f\d]{24}$/i, "El ID del profesor debe ser una cadena de 24 caracteres hexadecimales"),
    
    categoria: yup.string()
        .required("La categoría es obligatoria"),
    
    descripcion: yup.string()
        .required("La descripción del curso es obligatoria")
        .min(20, "La descripción debe tener al menos 20 caracteres"),
    
    tecnologias: yup.array()
        .of(
            yup.string()
                .required("El nombre de la tecnología es obligatorio")
        )
        .min(1, "Debe incluir al menos una tecnología"),
    
    horas: yup.number()
        .required("El número de horas es obligatorio")
        .positive("Las horas deben ser un valor positivo")
        .integer("Las horas deben ser un número entero")
        .min(1, "Debe ser al menos 1 hora"),
    
    img: yup.string()
        .required("La imagen es obligatoria")
        .matches(/\.(jpg|jpeg|png)$/, "La imagen debe tener un formato jpg, jpeg o png"),
    
    link: yup.string()
        .url("Debe ser una URL válida")
        .required("El link es obligatorio"),
});