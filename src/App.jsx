import { useState } from 'react'
import { Routes,BrowserRouter, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Landing from './pages/Landing'
import Login from './pages/Login'

function App() {

  const [users,setusers] = useState(
    [
        {
            username:"john",
            password:"123"
        },

        {
          username:"abc",
          password:"123"
        }
    ]
)

  return (
    <div>
      <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
    <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
    <Route path='/landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
