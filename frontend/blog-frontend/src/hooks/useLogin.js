import { useAuthContext } from "./useAuthContext"
import { useState } from "react"

export const useLogin = () => {
    const [error, seterror] = useState(null);
    const {dispatch} = useAuthContext()

    const login = async (form) => {
        const res = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        const json = await res.json()

        if (!res.ok) {
            seterror(json.error)
            console.log(error)
        }

        if (res.ok) {
            dispatch({type: 'LOGIN', payload: json})
        }
   
    }

    return {login, error}


}