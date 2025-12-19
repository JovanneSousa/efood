import { useDispatch } from 'react-redux'
import { ProfileSideContainer } from './styles'
import { openSideBar } from '../../store/reducers/sideModal'
import { logout } from '../../store/reducers/auth'
import { useNavigate } from 'react-router-dom'

const ProfileSide = () => {
  const nome = localStorage.getItem('user')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <ProfileSideContainer>
      <div className="user">
        <div className="img">
          <img src="https://placehold.co/40" alt="placeholder" />
        </div>
        <p>{nome}</p>
      </div>
      <ul>
        <li onClick={() => navigate('/profile')}>Meus dados</li>
        <li onClick={() => navigate('/adress')}>Endereços</li>
        <li onClick={() => navigate('/restaurante/novo')}>
          Cadastrar um restaurante
        </li>
        <li onClick={() => dispatch(openSideBar('cart'))}>Carrinho</li>
        <li onClick={() => dispatch(logout())}>Sair</li>
      </ul>
    </ProfileSideContainer>
  )
}

export default ProfileSide
