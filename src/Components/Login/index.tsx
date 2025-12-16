import { useSelector } from 'react-redux'
import FormLogin from './Form'
import { LoginContainer } from './styles'
import type { RootReducer } from '../../store'
import Loader from '../Loader'

const Login = () => {
  const { loading } = useSelector((state: RootReducer) => state.auth)
  return loading ? (
    <Loader />
  ) : (
    <LoginContainer className="shadow">
      <p className="title-login">Bem vindo de volta!</p>
      <p>Faça login para acessar sua conta</p>
      <FormLogin />
    </LoginContainer>
  )
}

export default Login
