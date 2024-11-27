import yup from 'yup';

export const tecnologiaSchema = yup.object({
    nombre: yup.string()
        .required("El nombre de la tecnología es obligatorio")
        .min(2, "El nombre de la tecnología debe tener al menos 2 caracteres"),
    
    descripcion: yup.string()
        .required("La descripción es obligatoria")
        .min(10, "La descripción debe tener al menos 10 caracteres")
});