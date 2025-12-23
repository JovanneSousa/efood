import { useState } from 'react'
import type { BaseVariantProps } from '.'
import { CardPedidoContainer, ItemsSection, PedidoRow } from './styles'
import Button from '../Button'
import { ImageContainer } from './styles'

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
          <PedidoRow className="margin">
            <p className="nome-restaurante">pedido#101</p>
            <p className="preco">Valor total</p>
          </PedidoRow>
          <PedidoRow>
            <p>Cliente: Tal</p>

            <p>data</p>
          </PedidoRow>
          <PedidoRow>
            <p>N items</p>
          </PedidoRow>
          <PedidoRow>
            <p>Rua tal</p>
          </PedidoRow>
          <PedidoRow>
            {restaurante.cardapio.length != 0 && (
              <ItemsSection
                className={`${isPedidoItemActive ? 'is-open' : ''}`}
              >
                <p>Produtos do pedido</p>
                <div>
                  <div className="pedido-item-container item">
                    <ImageContainer>
                      <img
                        src={restaurante.cardapio[0].foto}
                        alt="placeholder"
                      />
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
                      <img
                        src={restaurante.cardapio[1].foto}
                        alt="placeholder"
                      />
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
                      <img
                        src={restaurante.cardapio[2].foto}
                        alt="placeholder"
                      />
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
          </PedidoRow>
          <PedidoRow>
            <Button padding="light" className="red" type="button">
              Aceitar pedido
            </Button>
            <Button
              onClick={() => setPedidoItemActive(!isPedidoItemActive)}
              padding="light"
              className="shine"
              type="button"
            >
              {isPedidoItemActive ? 'Ocultar detalhes' : 'Ver detalhes'}
            </Button>
          </PedidoRow>
        </div>
      </div>
    </CardPedidoContainer>
  )
}
export default ManagementCardPedido
