import { AddressContainer, ProfileContainer } from './styles'
import useBodyClass from '../../Hooks/useBodyClass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faShop } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button'
import CardRestaurante from '../CardRestaurante'
import { useGetRestaurantesQuery } from '../../services/api'
import Loader from '../Loader'

const Profile = () => {
  // altera a cor do body com base na classe
  useBodyClass('layout-profile')
  const { data: restaurantes } = useGetRestaurantesQuery()

  if (!restaurantes) return <Loader />

  const restaurante = restaurantes[0]

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
              <div>
                <FontAwesomeIcon icon={faLocationDot} />
                <p>Meus Endereços</p>
              </div>
              <Button className="red" padding="big">
                + Novo
              </Button>
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
            </AddressContainer>
          </div>
          <div className="grid-item">
            <div className="title">
              <div className="div">
                <FontAwesomeIcon icon={faShop} />
                <p>Meus Estabelecimentos</p>
              </div>
              <Button className="red" padding="big">
                + Novo
              </Button>
            </div>
            <AddressContainer>
              <CardRestaurante
                variant="profile"
                categoria={restaurante.tipo}
                id={restaurante.id}
                image={restaurante.capa}
                nome={restaurante.titulo}
                nota={restaurante.avaliacao}
              />
              <CardRestaurante
                variant="profile"
                categoria={restaurante.tipo}
                id={restaurante.id}
                image={restaurante.capa}
                nome={restaurante.titulo}
                nota={restaurante.avaliacao}
              />
              <CardRestaurante
                variant="profile"
                categoria={restaurante.tipo}
                id={restaurante.id}
                image={restaurante.capa}
                nome={restaurante.titulo}
                nota={restaurante.avaliacao}
              />
            </AddressContainer>
          </div>
        </div>
      </div>
    </ProfileContainer>
  )
}

export default Profile
