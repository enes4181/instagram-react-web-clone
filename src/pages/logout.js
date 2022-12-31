import { useEffect } from "react"
import { logout } from "../firebase"


export default function Logout() {

    useEffect(()=>{
        logout()
    })

    return null
}

