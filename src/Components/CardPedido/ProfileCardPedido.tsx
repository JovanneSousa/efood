import { useState } from 'react'
import {
  CardPedidoContainer,
  ImageContainer,
  ItemsSection,
  PedidoRow
} from './styles'
import type { BaseVariantProps } from '.'
import Tag from '../Tags'

export interface ProfileCardPedidoProps extends BaseVariantProps {
  variant: 'profile'
}

const ProfileCardPedido = ({
  restaurante,
  variant
}: ProfileCardPedidoProps) => {
  const [isPedidoItemActive, setPedidoItemActive] = useState(false)

  return (
    <CardPedidoContainer variant={variant} className="pedido-item">
      <div className="pedido-item-container">
        <ImageContainer>
          <img src={restaurante.capa} alt="placeholder" />
        </ImageContainer>
        <div className="pedido-group">
          <PedidoRow>
            <p className="nome-restaurante">{restaurante.titulo}</p>
            <Tag value={['pendente']} status="concluido" />
            <p className="preco">R$ 49,59</p>
          </PedidoRow>
          <PedidoRow>
            <p className="dados-pedido">pedido#1 &bull; N items &bull; Data</p>
            <p
              className="details"
              onClick={() => setPedidoItemActive(!isPedidoItemActive)}
            >
              {!isPedidoItemActive ? 'ver detalhes' : 'Ocultar detalhes'}
            </p>
          </PedidoRow>
        </div>
      </div>
      {restaurante.cardapio.length != 0 && (
        <ItemsSection className={`${isPedidoItemActive ? 'is-open' : ''}`}>
          <p>Produtos do pedido</p>
          <div>
            <div className="pedido-item-container item">
              <ImageContainer>
                <img src={restaurante.cardapio[0].foto} alt="placeholder" />
              </ImageContainer>
              <div className="pedido-group">
                <PedidoRow>
                  <p className="nome-restaurante">
                    {restaurante.cardapio[0].nome}
                  </p>
                  <p className="preco">
                    Total: R$ {restaurante.cardapio[0].preco}
                  </p>
                </PedidoRow>
                <PedidoRow>
                  <p>qtd: 1</p>
                  <p>Valor unidade: R$ {restaurante.cardapio[0].preco}</p>
                </PedidoRow>
              </div>
            </div>
            <div className="pedido-item-container item">
              <ImageContainer>
                <img src={restaurante.cardapio[1].foto} alt="placeholder" />
              </ImageContainer>
              <div className="pedido-group">
                <PedidoRow>
                  <p className="nome-restaurante">
                    {restaurante.cardapio[1].nome}
                  </p>
                  <p className="preco">
                    Total: R$ {restaurante.cardapio[1].preco}
                  </p>
                </PedidoRow>
                <PedidoRow>
                  <p>qtd: 1</p>
                  <p>Valor unidade: R$ {restaurante.cardapio[1].preco}</p>
                </PedidoRow>
              </div>
            </div>
            <div className="pedido-item-container item">
              <ImageContainer>
                <img src={restaurante.cardapio[2].foto} alt="placeholder" />
              </ImageContainer>
              <div className="pedido-group">
                <PedidoRow>
                  <p className="nome-restaurante">
                    {restaurante.cardapio[2].nome}
                  </p>
                  <p className="preco">
                    Total: R$ {restaurante.cardapio[2].preco}
                  </p>
                </PedidoRow>
                <PedidoRow>
                  <p>qtd: 1</p>
                  <p>Valor unidade: R$ {restaurante.cardapio[2].preco}</p>
                </PedidoRow>
              </div>
            </div>
          </div>
        </ItemsSection>
      )}
    </CardPedidoContainer>
  )
}

export default ProfileCardPedido
