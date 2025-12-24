import styled, { css } from 'styled-components'
import { breakpoint, cores } from '../../GlobalStyle'

interface CardProdutoProps {
  variant: 'default' | 'management'
}

const cardVariant = {
  default: css`
    padding: 8px;
    img {
      max-width: 100%;
      height: 167px;
    }
  `,
  management: css`
    padding: 16px;

    img {
      max-width: 96px;
      height: 96px;
    }
  `
}

export const CardContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant'
})<CardProdutoProps>`
  background-color: ${cores.corTexto};
  color: ${cores.corFooter};

  .flex {
    display: flex;
    gap: 8px;

    .minor {
      max-width: 64px;
    }
  }

  .text {
    display: flex;
    flex-direction: column;

    .nome,
    .preco {
      font-weight: bold;
    }

    p {
      padding: 4px;
    }
  }

  img {
    object-fit: cover;
    width: 100%;
  }

  @media (max-width: ${breakpoint.tablet}) {
    padding: 8px;
  }

  ${({ variant }) => cardVariant[variant]}
`
export const NomeProduto = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
`

export const DescProduto = styled.p`
  font-size: 14px;
  line-height: 22px;
`
