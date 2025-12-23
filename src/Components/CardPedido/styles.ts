import styled from 'styled-components'
import { breakpoint, cores } from '../../GlobalStyle'
import { ImageContainerFit } from '../Profile/styles'

interface CardPedidoVariant {
  variant: 'profile' | 'management'
}

export const CardPedidoContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant'
})<CardPedidoVariant>`
  background-color: ${cores.corDeFundoEscura};
  padding: 16px;

  .pedido-item-container {
    display: flex;
    gap: 8px;
  }

  .pedido-group {
    display: flex;
    flex-direction: column;

    gap: ${({ variant }) => (variant == 'profile' ? '8px' : '0')};
    width: 100%;
    justify-content: center;
  }

  @media (max-width: ${breakpoint.tablet}) {
    padding: 8px;
  }
`

export const ItemsSection = styled.div`
  background-color: ${cores.corFooter};
  width: 100%;

  max-height: 0px;
  overflow: hidden;
  opacity: 0;

  transform: translateY(-8px);
  transition: max-height 0.35s ease, opacity 0.25s ease, transform 0.25s ease;

  > p {
    padding: 8px 0;
  }
  .item {
    padding: 12px;
    background-color: ${cores.corDeFundoEscura};
    margin-bottom: 8px;

    @media (max-width: ${breakpoint.tablet}) {
      padding: 8px;
    }
  }

  &.is-open {
    margin-top: 8px;
    max-height: 800px;
    opacity: 1;
    transform: translateY(0);
    padding: 8px;
  }
`

export const PedidoRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;

  &.margin {
    margin-bottom: 8px;
  }

  .details {
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover {
      font-weight: bold;
      transform: scale(1.02);
    }
  }

  .nome-restaurante {
    font-size: 16px;
  }
  .preco {
    font-size: 20px;
  }

  .nome-restaurante,
  .preco {
    font-weight: bold;

    @media (max-width: ${breakpoint.tablet}) {
      font-size: 14px;
    }
  }

  p {
    @media (max-width: ${breakpoint.tablet}) {
      font-size: 14px;
    }
  }
`

export const ImageContainer = styled(ImageContainerFit)`
  width: 60px;
  height: 60px;
  img {
    border-radius: 0%;
  }
`
