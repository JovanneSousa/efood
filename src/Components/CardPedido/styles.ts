import styled from 'styled-components'
import { breakpoint, cores } from '../../GlobalStyle'

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

    .img {
      height: 60px;
      width: 60px;
      img {
        border-radius: 0%;
      }
    }
  }

  .pedido-group {
    display: flex;
    flex-direction: column;

    gap: ${({variant}) => variant == 'profile' ? '8px' : '0'};
    width: 100%;
    justify-content: center;

    .pedido-item-group {
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
    }
  }
`
