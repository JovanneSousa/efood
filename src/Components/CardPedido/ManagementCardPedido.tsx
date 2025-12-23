import { useState } from 'react'
import type { BaseVariantProps } from '.'
import { CardPedidoContainer } from './styles'
import Button from '../Button'

export interface ManagementCardPedidoProps extends BaseVariantProps {
  variant: 'management'
}

const ManagementCardPedido = ({
  restaurante,
  variant
}: ManagementCardPedidoProps) => {
  const [isPedidoItemActive, setPedidoItemActive] = useState(false)

  return (
    <CardPedidoContainer variant={variant} className="pedido-item">
      <div className="pedido-item-container">
        <div className="pedido-group">
          <div className="pedido-item-group margin">
            <p className="nome-restaurante">pedido#101</p>
            <p className="preco">Valor total</p>
          </div>
          <div className="pedido-item-group ">
            <p>Cliente: Tal</p>

            <p>data</p>
          </div>
          <div className="pedido-item-group">
            <p>N items</p>
          </div>
          <div className="pedido-item-group">
            <p>Rua tal</p>
          </div>
          <div className="pedido-item-group">
            <Button padding="light" className="red" type="button">
              Aceitar pedido
            </Button>
            <Button onClick={() => setPedidoItemActive(true)} padding="light" className='shine' type="button">
              Ver detalhes
            </Button>
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
export default ManagementCardPedido
