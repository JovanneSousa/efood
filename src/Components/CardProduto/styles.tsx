import styled from 'styled-components'
import { cores } from '../../GlobalStyle'

interface CardProdutoProps {
  variant: 'default' | 'management'
}

export const CardContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop)
})<CardProdutoProps>`
  padding: ${({ variant }) => (variant == 'default' ? '8px' : '16px')};
  background-color: ${cores.corTexto};
  color: ${cores.corFooter};

.flex {
  display: flex;
  gap: 8px;

  .minor {
    max-width: 15%;
  }
}

  .text {
    display: flex;
    flex-direction: column;

    .nome, .preco {
      font-weight: bold;
    }

    p {
      padding: 4px;
    }
  }

  img {
    object-fit: cover;
    max-width: ${({ variant }) => (variant == 'default' ? '100%' : '96px')};
    width: 100%;
    height: ${({ variant }) => (variant == 'default' ? '167px' : '96px')};
  }
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
