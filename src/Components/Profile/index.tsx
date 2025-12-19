import { AddressContainer, ProfileContainer } from './styles'
import useBodyClass from '../../Hooks/useBodyClass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button'

const Profile = () => {
  // altera a cor do body com base na classe
  useBodyClass('layout-profile')

  return (
    <ProfileContainer>
      <div className="container">
        <div className="profile-data">
          <div className="img">
            <img src="https://placehold.co/80" alt="placeholder" />
          </div>
          <div className="profile-info">
            <p className="name-profile">{localStorage.getItem('user')}</p>
            <p>{localStorage.getItem('email') || 'email@exemplo'}</p>
            <p>{localStorage.getItem('telefone') || '9999999999'}</p>
          </div>
        </div>
        <div className="grid">
          <div className="grid-item">
            <div className="title">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Meus Endereços</p>
            </div>
            <AddressContainer>
              <div className="card-address">
                <div className="header-address-card">
                  <p className="title-address">Casa</p>
                </div>
                <p>Rua patati, 323</p>
                <p>Centro - Gotham</p>
                <p>00000-001</p>
              </div>
              <div className="card-address">
                <div className="header-address-card">
                  <p className="title-address">Casa</p>
                </div>
                <p>Rua patati, 323</p>
                <p>Centro - Gotham</p>
                <p>00000-001</p>
              </div>
              <div className="card-address">
                <div className="header-address-card">
                  <p className="title-address">Casa</p>
                  <span>principal</span>
                </div>
                <p>Rua patati, 323</p>
                <p>Centro - Gotham</p>
                <p>00000-001</p>
              </div>
              <Button className='red' padding='big' >+ Adicionar Endereço</Button>
            </AddressContainer>
          </div>
          <div className="grid-item">conteudo2</div>
        </div>
      </div>
    </ProfileContainer>
  )
}

export default Profile
