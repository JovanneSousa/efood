import Header from '../../Components/Header'
import { ContainerAuth } from './styles'
import AuthComponent from '../../Components/AuthComponent'
import { Navigate, useParams } from 'react-router-dom'

const Auth = () => {
  const { type } = useParams()

  if (type !== 'login' && type !== 'register')
    return <Navigate to={'/auth/login'} />
  return (
    <>
      <Header inLoginPage={true} />
      <ContainerAuth className="container">
        <AuthComponent page={type} />
      </ContainerAuth>
    </>
  )
}

export default Auth
