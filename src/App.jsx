import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './views/Login'
import Profile from './views/Profile'
import ResponsiveAppBar from './components/AppBar'
import { useEffect, useState } from 'react'
import Info from './views/Info'
import Details from './components/Details'
import useAuth from './hooks/useAuth'
import useData from './hooks/useData'
import LifeCylce from './components/LifeCylce'


function App() {
  const [show, setShow] = useState(false)
  const { isLogin, token, user, login, logout } = useAuth()
  const {getUsers, delUser, addUser, users} = useData(token)
  useEffect(() => {
    if (isLogin) {
    getUsers()
  }
  }, [isLogin])
  return (
  <>
  <BrowserRouter>
  {isLogin && <ResponsiveAppBar user={user} logout={logout} />}
  <Routes>
    <Route path='/' element={<Login login={login} />} />
    <Route path='/profile' element={<Profile user={user} />} />
    <Route path='/info' element={<Info addUser={addUser} users={users} delUser={delUser} token={token} logout={logout} />} />
    <Route path='/users/:username' element={<Details users={users} />} />
  </Routes>
  </BrowserRouter>
  <button onClick={()=>setShow(!show)}> {show ? "hide" : "show"} </button>
  {show && <LifeCylce />}
  </>
  )
}


export default App;
