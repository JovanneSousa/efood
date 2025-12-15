import FormLogin from './Form'
import { LoginContainer } from './styles'

const Login = () => {
  return (
    <LoginContainer>
      <p className='title-login'>Bem vindo de volta!</p>
      <p>Faça login para acessar sua conta</p>
      <FormLogin />
    </LoginContainer>
  )
}

export default Login
