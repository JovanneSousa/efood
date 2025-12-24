import { useDispatch } from 'react-redux'
import { ProfileSideContainer } from './styles'
import { closeSidebar, openSideBar } from '../../store/reducers/sideModal'
import { logout } from '../../store/reducers/auth'
import { useNavigate } from 'react-router-dom'

const ProfileSide = () => {
  const nome = localStorage.getItem('user')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onClick = (route: string) => {
    navigate(route)
    dispatch(closeSidebar())
  }

  const sair = () => {
    dispatch(logout())
    dispatch(closeSidebar())
  }

  return (
    <ProfileSideContainer>
      <div className="user">
        <div className="img">
          <img src="https://placehold.co/40" alt="placeholder" />
        </div>
        <p>{nome}</p>
      </div>
      <ul>
        <li onClick={() => onClick('/profile')}>Meus dados</li>
        <li onClick={() => onClick('/adress')}>Endereços</li>
        <li onClick={() => onClick('/restaurante/novo')}>
          Meus Restaurantes
        </li>
        <li onClick={() => dispatch(openSideBar('cart'))}>Carrinho</li>
        <li onClick={sair}>Sair</li>
      </ul>
    </ProfileSideContainer>
  )
}

export default ProfileSide
