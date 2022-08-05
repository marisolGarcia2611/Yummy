import { useContext, useEffect } from "react"
import { createContext, useState } from "react"
import Swal from "sweetalert2";
import axios, { AxiosError } from 'axios'
export const authContext = createContext()
import Cookies from "universal-cookie";
import { mostrarToast, Request } from "../funciones_globales";
const cookies = new Cookies()

export const useCredenciales = () => {
    const [credenciales, setCredenciales] = useState({ username: '', password: '' })
    const inputChange = ({ target }) => {
        const { name, value } = target
        setCredenciales({ ...credenciales, [name]: value })
    }
    return { credenciales, inputChange }
}

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}
export function AuthProvider({ children }) {
    const { credenciales, inputChange } = useCredenciales()
    const [loged, setLoged] = useState(false)
    const changeState = (option) => {
        setLoged(option)
    }
    
    useEffect(() => {
        if (loged) console.log("cambio estado",loged)
    }, [loged]);


    const login = async (credenciales) => {
        return await axios.post("http://127.0.0.1:8000/api/login", credenciales)
        .catch(response => {
            let { message } = response.response.data.errors
            
            throw new Error(message[0])
        })
    }
    const setCookies = (token, name, last_name, email, role_id) => {
        cookies.set('Authorization', token, { path: '/' })
        cookies.set('name', name, { path: '/' })
        cookies.set('last_name', last_name, { path: '/' })
        cookies.set('email', String(email), { path: '/' })
        cookies.set('role_id', role_id, { path: '/' })
    }
    return (
        <authContext.Provider value={{ credenciales, inputChange, changeState, login, setCookies }}>
            {children}
        </authContext.Provider>
    )

}

