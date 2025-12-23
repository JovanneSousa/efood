import { useState } from 'react'
import { CardPedidoContainer } from './styles'
import type { BaseVariantProps } from '.'

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
        <div className="img">
          <img src={restaurante.capa} alt="placeholder" />
        </div>
        <div className="pedido-group">
          <div className="pedido-item-group">
            <p className="nome-restaurante">{restaurante.titulo}</p>
            <p className="preco">R$ 49,59</p>
          </div>
          <div className="pedido-item-group">
            <p className="dados-pedido">pedido#1 &bull; N items &bull; Data</p>
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
                <img src={restaurante.cardapio[0].foto} alt="placeholder" />
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
                <img src={restaurante.cardapio[1].foto} alt="placeholder" />
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
                <img src={restaurante.cardapio[2].foto} alt="placeholder" />
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
    </CardPedidoContainer>
  )
}

export default ProfileCardPedido
