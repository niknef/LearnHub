import yup from 'yup';

export const usuarioSchema = yup.object({
    nombre: yup.string().required().min(3, "El nombre debe tener al menos 3 caracteres"),
    apellido: yup.string().required().min(3, "El apellido debe tener al menos 3 caracteres"),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(16)
                .matches(/[0-9]/, "La contraseña debe tener al menos un número")
                .matches(/[A-Z]/, "La contraseña debe tener al menos una mayúscula")
                .matches(/[@$!%*?&]/, 'La contraseña debe tener al menos un carácter especial'),
    passwordConfirm: yup.string().oneOf([yup.ref("password")], "Las contraseñas deben coincidir").required(),
    age: yup.number().integer().min(18, "Debes ser mayor de 18 años"),
    
    // Agregamos un campo para el rol
    role: yup.string().oneOf(["alumno", "profesor"], "El rol debe ser 'alumno' o 'profesor'").required()
});

export const loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(16)
});