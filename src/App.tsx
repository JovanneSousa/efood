import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Restaurantes from './Pages/Restaurantes'
import { GlobalStyle } from './GlobalStyle'
import Footer from './Components/Footer'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes/:id" element={<Restaurantes />} />
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
