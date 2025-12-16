import { useSelector } from 'react-redux'
import Header from '../../Components/Header'
import Loader from '../../Components/Loader'
import Login from '../../Components/Login'
import type { RootReducer } from '../../store'
import { ContainerAuth } from './styles'

const Auth = () => {
  const { loading } = useSelector((state: RootReducer) => state.auth)
  return (
    <>
      <Header noButtonLogin={true} />
      <ContainerAuth className="container">
        {loading ? <Loader /> : <Login />}
      </ContainerAuth>
    </>
  )
}

export default Auth
