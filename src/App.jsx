import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Login from './views/Login'
import Profile from './views/Profile'
import ResponsiveAppBar from './components/AppBar'
import Info from './views/Info'

function AppContent() {
  const location = useLocation();
  const isLogin = location.pathname === '/';
  return (
    <>
      {!isLogin && <ResponsiveAppBar />}
       <Routes>
          <Route path= '/' element={<Login />} />
          <Route path= '/profile' element={<Profile />} />
          <Route path= '/info' element={<Info />} />
       </Routes>
    </>
  )
}

  function App() {
    return (
      <>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </>
    )
  }
export default App;
