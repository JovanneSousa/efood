import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import Footer from './Components/Footer'
import CartBar from './Components/CartBar'

import { GlobalStyle } from './GlobalStyle'
import { store } from './store'
import { lazy, Suspense } from 'react'
import Loader from './Components/Loader'

const Auth = lazy(() => import('./Pages/Auth'))
const Home = lazy(() => import('./Pages/Home'))
const Restaurantes = lazy(() => import('./Pages/Restaurantes'))

const Rotas = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurantes/:id" element={<Restaurantes />} />
        <Route path="/auth/:type" element={<Auth />} />
      </Routes>
    </Suspense>
  )
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
        <CartBar />
      </BrowserRouter>
    </Provider>
  )
}

export default App
