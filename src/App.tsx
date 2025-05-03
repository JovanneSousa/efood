import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './Pages/Home'
import Restaurantes from './Pages/Restaurantes'
import { GlobalStyle } from './GlobalStyle'
import Footer from './Components/Footer'
import { store } from './store'

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
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
