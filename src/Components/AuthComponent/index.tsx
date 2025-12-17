import { useSelector } from 'react-redux'
import FormLogin from './FormLogin'
import { FormContainer } from './styles'
import type { RootReducer } from '../../store'
import Loader from '../Loader'
import FormRegister from './FormRegister'

interface AuthComponentProps {
  page: string
}

const AuthComponent: React.FC<AuthComponentProps> = ({ page }) => {
  const { loading } = useSelector((state: RootReducer) => state.auth)

  return loading ? (
    <Loader />
  ) : (
    <FormContainer className="shadow">
      {page == 'login' ? (
        <>
          <p className="title-login">Bem vindo de volta!</p>
          <p>Faça login para acessar sua conta</p>
          <FormLogin />
        </>
      ) : page == 'register' ? (
        <>
          <p className="title-login">Seja Bem vindo!</p>
          <p>Crie sua conta para mais funcionalidades</p>
          <FormRegister />
        </>
      ) : null}

      {}
    </FormContainer>
  )
}

export default AuthComponent
