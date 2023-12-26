import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Login from './components/Login/Login.jsx'
import Singup from './components/Singup/Singup.jsx'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index path='/Cadastro-Login' element={<Login />}/>
          <Route path='/Cadastro-Login/singup' element={<Singup />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
