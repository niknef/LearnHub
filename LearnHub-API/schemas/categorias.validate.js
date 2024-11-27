import yup from 'yup';

export const categoriaSchema = yup.object({
    nombre: yup.string()
        .required("El nombre de la categoría es obligatorio")
        .min(3, "El nombre de la categoría debe tener al menos 3 caracteres"),
    
    descripcion: yup.string()
        .required("La descripción es obligatoria")
        .min(10, "La descripción debe tener al menos 10 caracteres")
});