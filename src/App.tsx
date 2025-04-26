import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Restaurante from './Pages/Restaurantes/HiokiSushi'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<Restaurante />} />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
