import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import { GlobalStyle } from './GlobalStyle'
import { store } from './store'
import { lazy, Suspense } from 'react'
import Loader from './Components/Loader'
import Profile from './Components/Profile'
import { DefaultLayout } from './Layouts/DefaultLayout/DefaultLayout'
import RestauranteLayout from './Layouts/RestauranteLayout'

const Auth = lazy(() => import('./Pages/Auth'))
const Home = lazy(() => import('./Pages/Home'))
const Restaurantes = lazy(() => import('./Pages/Restaurantes'))

const Rotas = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/auth/:type" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<RestauranteLayout />}>
          <Route path="/restaurantes/:id" element={<Restaurantes />} />
        </Route>
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
      </BrowserRouter>
    </Provider>
  )
}

export default App
