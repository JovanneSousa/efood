import styled from 'styled-components'
import { breakpoint, cores } from '../../GlobalStyle'

interface PedidosContainerSectionProps {
  variant: 'profile' | 'management'
}

export const PedidosContainerSection = styled.section.withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop)
})<PedidosContainerSectionProps>`
  background-color: ${({ variant }) =>
    variant == 'profile' ? cores.corDeFundo : cores.corFooter};
  padding: ${({variant}) => variant == 'profile' ? '24px' : '0'};
  display: flex;
  flex-direction: column;
  gap: 20px;

  .img {
    height: 60px;
    width: 60px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0%;
      object-fit: cover;
    }
  }

  .pedido-item {
    background-color: ${cores.corDeFundoEscura};
    padding: 16px;

    .pedido-item-container {
      display: flex;
      gap: 8px;
    }

    @media (max-width: ${breakpoint.tablet}) {
      padding: 8px;
    }
  }

  .items {
    background-color: ${cores.corFooter};

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

    .nome-restaurante,
    .preco {
      @media (max-width: ${breakpoint.tablet}) {
        font-size: 14px;
      }
    }
  }

  @media (max-width: ${breakpoint.tablet}) {
    padding: 8px;
  }
`
