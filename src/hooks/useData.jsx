import { useState } from 'react'

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000"
// const API_URL = "https://sivanna.up.railway.app"

const useData = (token) => {
    const [users, setUsers] = useState([])    
    const getUsers = async () => {  
        const res = await fetch(API_URL + '/users', {headers: {authorization: token }})
        const data = await res.json()   
        setUsers(data)
    }
    const del = async (id) => {
        setUsers(users.filter((u) => u._id !== id))
        await fetch(API_URL + '/users/' + id, {headers: {authorization: token },method: "delete" })
    }
    const add = async (newUser) => {
        const res = await fetch(API_URL + '/users', {
            method: "post",
            headers: { "content-Type": "application/json", authorization: token },
            body:JSON.stringify(newUser)
        })
        const data = await res.json()
        setUsers([...users, data])
    }
    return {users, getUsers, delUser:del, addUser:add}

}

export default useData