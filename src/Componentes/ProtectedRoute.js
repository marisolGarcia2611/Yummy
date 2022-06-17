import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Cookies from "universal-cookie";
const cookies = new Cookies()
export function ProtectedRoute({ children }) {
    const auth = cookies.get("Authorization")
    const { changeState } = useAuth()
    if (!auth) {
        return <Navigate to="/"></Navigate>
    }
    useEffect(() => {
        changeState(true)
    }, []);
    return <>
        {children}
    </>
}