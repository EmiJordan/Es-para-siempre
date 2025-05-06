import { HashRouter, Route, Routes } from 'react-router'
import './App.css'
import { Home } from './pages/Home'
import { Cita } from './pages/Cita'

function App() {


  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cita' element={<Cita />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
