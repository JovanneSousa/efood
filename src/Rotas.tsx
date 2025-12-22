import { Loader } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Rotas = () => {
  const Auth = lazy(() => import('./Pages/Auth'))
  const Home = lazy(() => import('./Pages/Home'))
  const Restaurantes = lazy(() => import('./Pages/Restaurantes'))
  const ProfilePage = lazy(() => import('./Pages/ProfilePage'))
  const DefaultLayout = lazy(() => import('./Layouts/DefaultLayout'))
  const RestauranteLayout = lazy(() => import('./Layouts/RestauranteLayout'))

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/auth/:type" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/restaurantes/novo" />
          <Route path="/gerenciar-restaurante/:id" />
        </Route>
        <Route element={<RestauranteLayout />}>
          <Route path="/restaurantes/:id" element={<Restaurantes />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default Rotas
