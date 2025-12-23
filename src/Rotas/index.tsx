import { Loader } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

const Rotas = () => {
  const Auth = lazy(() => import('../Pages/Auth'))
  const Home = lazy(() => import('../Pages/Home'))
  const Restaurantes = lazy(() => import('../Pages/Restaurantes'))
  const ProfilePage = lazy(() => import('../Pages/ProfilePage'))
  const DefaultLayout = lazy(() => import('../Layouts/DefaultLayout'))
  const RestauranteLayout = lazy(() => import('../Layouts/RestauranteLayout'))
  const GerenciarRestaurante = lazy(
    () => import('../Pages/GerenciarRestaurante')
  )

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/auth/:type" element={<Auth />} />
          <Route path="/" element={<Home />} />

          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/restaurantes/novo" />
          </Route>
        </Route>
        <Route element={<RestauranteLayout />}>
          <Route element={<PrivateRoute />}>
            <Route
              path="/gerenciar-restaurante/:id"
              element={<GerenciarRestaurante />}
            />
          </Route>
          <Route path="/restaurantes/:id" element={<Restaurantes />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default Rotas
