import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Restaurante from './Pages/Restaurantes'
import { GlobalStyle } from './GlobalStyle'
import Footer from './Components/Footer'

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
      <GlobalStyle />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
