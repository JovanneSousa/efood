import { AddressContainer, ProfileContainer } from './styles'
import useBodyClass from '../../Hooks/useBodyClass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faShop,
  faBoxOpen
} from '@fortawesome/free-solid-svg-icons'
import Button from '../Button'
import CardRestaurante from '../CardRestaurante'
import { useState } from 'react'
import items from '../../Data'

const Profile = () => {
  // altera a cor do body com base na classe
  useBodyClass('layout-profile')
  const [isPedidoItemActive, setPedidoItemActive] = useState(false)

  const restaurante = items[0]
  console.log(restaurante)

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
        <div className="pedidos">
          <div className="title">
            <div>
              <FontAwesomeIcon icon={faBoxOpen} />
              <p>Histórico de pedidos</p>
            </div>
          </div>
          <p>Acompanhe todos os pedidos realizados</p>
          <div className="pedido-item">
            <div className="pedido-item-container">
              <div className="img">
                <img src={restaurante.capa} alt="placeholder" />
              </div>
              <div className="pedido-group">
                <div className="pedido-item-group">
                  <p className="nome-restaurante">Local do pedido</p>
                  <p className="preco">R$ 49,59</p>
                </div>
                <div className="pedido-item-group">
                  <p className="dados-pedido">
                    pedido#1 &bull; N items &bull; Data
                  </p>
                  <p
                    className="details"
                    onClick={() => setPedidoItemActive(!isPedidoItemActive)}
                  >
                    {!isPedidoItemActive ? 'ver detalhes' : 'Ocultar detalhes'}
                  </p>
                </div>
              </div>
            </div>
            {restaurante.cardapio.length != 0 && (
              <div className={`items ${isPedidoItemActive ? 'is-open' : ''}`}>
                <p>Produtos do pedido</p>
                <div className="items-container">
                  <div className="pedido-item-container item">
                    <div className="img">
                      <img
                        src={restaurante.cardapio[0].foto}
                        alt="placeholder"
                      />
                    </div>
                    <div className="pedido-group">
                      <div className="pedido-item-group">
                        <p className="nome-restaurante">
                          {restaurante.cardapio[0].nome}
                        </p>
                        <p className="preco">
                          Total: R$ {restaurante.cardapio[0].preco}
                        </p>
                      </div>
                      <div className="pedido-item-group">
                        <p>qtd: 1</p>
                        <p>Valor unidade: R$ {restaurante.cardapio[0].preco}</p>
                      </div>
                    </div>
                  </div>
                  <div className="pedido-item-container item">
                    <div className="img">
                      <img
                        src={restaurante.cardapio[1].foto}
                        alt="placeholder"
                      />
                    </div>
                    <div className="pedido-group">
                      <div className="pedido-item-group">
                        <p className="nome-restaurante">
                          {restaurante.cardapio[1].nome}
                        </p>
                        <p className="preco">
                          Total: R$ {restaurante.cardapio[1].preco}
                        </p>
                      </div>
                      <div className="pedido-item-group">
                        <p>qtd: 1</p>
                        <p>Valor unidade: R$ {restaurante.cardapio[1].preco}</p>
                      </div>
                    </div>
                  </div>
                  <div className="pedido-item-container item">
                    <div className="img">
                      <img
                        src={restaurante.cardapio[2].foto}
                        alt="placeholder"
                      />
                    </div>
                    <div className="pedido-group">
                      <div className="pedido-item-group">
                        <p className="nome-restaurante">
                          {restaurante.cardapio[2].nome}
                        </p>
                        <p className="preco">
                          Total: R$ {restaurante.cardapio[2].preco}
                        </p>
                      </div>
                      <div className="pedido-item-group">
                        <p>qtd: 1</p>
                        <p>Valor unidade: R$ {restaurante.cardapio[2].preco}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ProfileContainer>
  )
}

export default Profile
