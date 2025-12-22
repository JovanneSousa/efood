import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { type RootReducer } from '../store'

const PrivateRoute = () => {
  const { logged } = useSelector(
    (state: RootReducer) => state.auth
  )

  return logged ? <Outlet /> : <Navigate to="/auth/login" replace />
}

export default PrivateRoute
