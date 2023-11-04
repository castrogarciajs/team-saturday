import { useEffect } from 'react'
import {auth} from '../firebase/app.js'
import {useNavigate} from 'react-router-dom'

export function HomePage() {
    const navigate = useNavigate()
    useEffect(() => {
        const user = auth.currentUser
        if(user) {
            console.log(user)
        } else {
            navigate('/login')
            console.log('No hay usuario')
        }
    }, [])
    return (
        <h1>Ruta principal</h1>
    )
}