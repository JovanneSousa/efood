import {
  CardAddress,
  ContentContainer,
  ImageContainerFit,
  ProfileContainer
} from './styles'
import useBodyClass from '../../Hooks/useBodyClass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faPencil,
  faShop,
  faTrash
} from '@fortawesome/free-solid-svg-icons'
import Button from '../Button'
import CardRestaurante from '../CardRestaurante'
import items from '../../Data'
import PedidosContainer from '../PedidosContainer'
import { useState } from 'react'
import FormAddress from './FormAddress'
import FormRestaurante from '../FromRestaurante'

const Profile = () => {
  // altera a cor do body com base na classe
  useBodyClass('layout-profile')

  const [isFormAddressOpen, setIsFormAddressOpen] = useState(false)

  const [isAddingAddress, setIsAddingAddress] = useState(false)

  const [isFormRestauranteOpen, setIsFormRestauranteOpen] = useState(false)

  const setIsEditingAddress = () => {
    setIsFormAddressOpen(true)
    setIsAddingAddress(false)
  }

  const setIsAdding = () => {
    setIsFormAddressOpen(true)
    setIsAddingAddress(true)
  }

  const closeFormAddress = () => {
    setIsAddingAddress(false)
    setIsFormAddressOpen(false)
  }

  const restaurante = items[0]

  return (
    <ProfileContainer>
      <div className="container">
        <div className="profile-data">
          <ImageContainerFit>
            <img src="https://placehold.co/80" alt="placeholder" />
          </ImageContainerFit>
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
              {!isFormAddressOpen && (
                <Button onClick={setIsAdding} className="red" padding="big">
                  + Novo
                </Button>
              )}
            </div>
            <ContentContainer>
              {isFormAddressOpen && (
                <FormAddress
                  closeForm={closeFormAddress}
                  isAdding={isAddingAddress}
                />
              )}
              {!isFormAddressOpen && (
                <>
                  <CardAddress>
                    <div className="header-address-card">
                      <p className="title-address">Casa</p>
                      <div className="icons">
                        <span>principal</span>
                        <FontAwesomeIcon
                          onClick={setIsEditingAddress}
                          icon={faPencil}
                        />
                        <FontAwesomeIcon icon={faTrash} />
                      </div>
                    </div>
                    <p>Rua patati, 323</p>
                    <p>Centro - Gotham</p>
                    <p>00000-001</p>
                  </CardAddress>
                  <CardAddress>
                    <div className="header-address-card">
                      <p className="title-address">Casa</p>
                      <div className="icons">
                        <FontAwesomeIcon
                          onClick={setIsEditingAddress}
                          icon={faPencil}
                        />
                        <FontAwesomeIcon icon={faTrash} />
                      </div>
                    </div>
                    <p>Rua patati, 323</p>
                    <p>Centro - Gotham</p>
                    <p>00000-001</p>
                  </CardAddress>
                  <CardAddress>
                    <div className="header-address-card">
                      <p className="title-address">Casa</p>
                      <div className="icons">
                        <FontAwesomeIcon
                          onClick={setIsEditingAddress}
                          icon={faPencil}
                        />
                        <FontAwesomeIcon icon={faTrash} />
                      </div>
                    </div>
                    <p>Rua patati, 323</p>
                    <p>Centro - Gotham</p>
                    <p>00000-001</p>
                  </CardAddress>
                </>
              )}
            </ContentContainer>
          </div>
          <div className="grid-item">
            <div className="title">
              <div className="div">
                <FontAwesomeIcon icon={faShop} />
                <p>Meus Estabelecimentos</p>
              </div>
              {!isFormRestauranteOpen && (
                <Button
                  onClick={() => setIsFormRestauranteOpen(true)}
                  className="red"
                  padding="big"
                >
                  + Novo
                </Button>
              )}
            </div>
            <ContentContainer>
              {isFormRestauranteOpen && (
                <FormRestaurante
                  cancel={() => setIsFormRestauranteOpen(false)}
                  editing={false}
                />
              )}
              {!isFormRestauranteOpen && (
                <>
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
                </>
              )}
            </ContentContainer>
          </div>
        </div>
        <PedidosContainer restaurante={restaurante} variant="profile" />
      </div>
    </ProfileContainer>
  )
}

export default Profile
