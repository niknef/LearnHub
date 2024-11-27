import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SessionContext = createContext()

function useSession(){
    return useContext(SessionContext)
}

function useLogOut(){ 
    const { onLogout } = useSession()
    return onLogout
}

function useLogin(){
    const { onLogin } = useSession()
    return onLogin
}

function useToken(){
    const { token } = useSession()
    return token
}

function SessionProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("token"))

    const navigate = useNavigate()

    const onLogout = () => {
        localStorage.clear()
        setToken(null)
    }

    const onLogin = (jwt) => {
        localStorage.setItem("token", jwt)
        setToken(jwt)
    }

    useEffect( () => {
        
        fetch("http://localhost:3333/api/usuarios",{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }
        })
        .then(response => response.json())
        .then(data => {
            if( data.message ){
                onLogout()
                navigate("/login")
            }else{
                onLogin(token)
            }
        })
    },[] )

    return (
        <SessionContext.Provider value={{ token, onLogout, onLogin }}>
            {children}
        </SessionContext.Provider>

    )
}

export { SessionContext, SessionProvider, useSession, useLogOut, useLogin, useToken }