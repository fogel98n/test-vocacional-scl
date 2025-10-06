import './App.css'
import { Route, Routes } from 'react-router-dom'
import { InicioPage } from './pages/inicio/inicio'
import { TestPage } from './pages/preguntas/preguntas'
import { ResultadosPage } from './pages/resultados/resultado'

function App() {
  return (
    <Routes>
      <Route path='/' element={<InicioPage />} />
      <Route path='/test' element={<TestPage />} />
      <Route path='/resultados' element={<ResultadosPage />} /> {/* nueva ruta */}
    </Routes>
  )
}

export default App
