import { useState } from "react"

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000"
// const API_URL = "https://sivanna.up.railway.app"

const useAuth = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [token, setToken] = useState("")  
    const [user, setUser] = useState({})

    const login = async (user) => {
        const res = await fetch(API_URL + '/login', {
            method: "post",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        const data = await res.json()   
        setIsLogin(data.login)
        setUser(data.user)  
        setToken(data.token)
        return data
    }
    const logout = () => {
        setIsLogin(false)
        setUser({})
        setToken("")
    }
    return {isLogin, token, user, login, logout}

}

export default useAuth