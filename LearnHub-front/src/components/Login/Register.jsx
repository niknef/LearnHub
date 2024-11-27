import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../services/auth.service';

const Register = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== passwordVerify) {
            alert("Las contraseñas no coinciden");
            return;
        }

        try {
            // Enviar los datos al servicio de registro
            await register({
                nombre,
                apellido,
                age: parseInt(age),
                role: 'alumno', // Role fijo como alumno
                email,
                password,
                confirmPassword: passwordVerify
            });
            navigate('/login');
        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            setError(error.message || 'Ocurrió un error al registrarse');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form
                onSubmit={handleSubmit}
                className="p-4 shadow-lg rounded"
                style={{ width: '500px', backgroundColor: '#f9f9f9' }}
            >
                <h1 className="text-center mb-4 text-custom">Registrar Usuario</h1>

                {/* Nombre y Apellido */}
                <div className="row mb-3">
                    <div className="col-6">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="apellido" className="form-label">Apellido</label>
                        <input
                            type="text"
                            className="form-control"
                            id="apellido"
                            placeholder="Apellido"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* Email y Edad */}
                <div className="row mb-3">
                    <div className="col-9">
                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Correo Electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-3">
                        <label htmlFor="age" className="form-label">Edad</label>
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            placeholder="Edad"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* Contraseñas */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className={`form-control ${password !== passwordVerify ? 'is-invalid' : ''}`}
                        id="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordVerify" className="form-label">Repetir Contraseña</label>
                    <input
                        type="password"
                        className={`form-control ${password !== passwordVerify ? 'is-invalid' : ''}`}
                        id="passwordVerify"
                        placeholder="Repite tu contraseña"
                        value={passwordVerify}
                        onChange={(e) => setPasswordVerify(e.target.value)}
                        required
                    />
                </div>

                <input type="hidden" value="alumno" /> {/* Campo oculto para el rol */}

                <button type="submit" className="btn boton-custom w-100">Registrarse</button>

                <div className="text-center mt-3">
                    <Link to="/login" className="text-decoration-none text-secondary">¿Ya tienes usuario?</Link>
                </div>

                {error && (
                    <div className="text-center mt-3">
                        <p className="text-danger">{error}</p>
                    </div>
                )}
            </form>
        </div>
    );
};

export default Register;
