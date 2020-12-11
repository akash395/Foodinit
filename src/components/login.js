import { UseState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from './auth'
export const login = async () => {
    const {token, setToken} = UseState (JSON.parse(localStorage.getItem ('token')))
    //const {token, setToken} = useContext (AuthContext)
    return (
        // await axios.get ('http://localhost:5000/admin')
        // .then (response => response.json())
        // .then (data => setToken (data))
        token
    )
}