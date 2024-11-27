import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLogin } from '../../contexts/session.context'
import { login } from '../../services/auth.service'
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onLogin = useLogin()

    const handleSubmit = async(e) => {
        e.preventDefault()

        login({ email, password })
        .then( usuario => {
          console.log(usuario)
            onLogin( usuario.token )
            navigate('/')
        })
        .catch( error => {
            console.log(error)
        })

    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
        <form 
          onSubmit={handleSubmit} 
          className="p-4 shadow-lg rounded" 
          style={{ width: '350px', backgroundColor: '#f9f9f9' }}
        >
          <h1 className="text-center mb-4 text-custom">Iniciar Sesión</h1>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Ingresa tu correo"
              onChange={handleChangeEmail}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Ingresa tu contraseña"
              onChange={handleChangePassword}
              required
            />
          </div>
          <button type="submit" className="btn boton-custom w-100">Iniciar Sesión</button>
          <div className="text-center mt-3">
            <Link to="/register" className="text-decoration-none text-secondary">¿Olvidaste tu contraseña?</Link>
          </div>
        </form>
      </div>
    )
}

export default Login