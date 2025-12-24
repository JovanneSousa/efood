import styled from 'styled-components'
import { cores } from '../../GlobalStyle'

type PaddingVariant = 'light' | 'big'

interface ButtonProps {
  padding?: PaddingVariant
}

export const ButtonCarrinho = styled.button.withConfig({
  shouldForwardProp: (prop) => !['padding'].includes(prop)
})<ButtonProps>`
  background-color: ${cores.corFooter};
  color: ${cores.corTexto};
  border: none;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  padding: ${({ padding }) => {
    if (padding == 'big') return '8px 8px'
    if (padding == 'light') return '8px'
    return '4px'
  }};
  margin-top: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
  text-align: center;

  &:hover {
    transform: scale(1.03);
  }

  &.red {
    background-color: ${cores.corTexto};
    color: ${cores.corFooter};
  }

  &.shine {
    background-color: ${cores.corDeFundo};
    border: 1px solid ${cores.corTexto};
  }

  &.comprar {
    width: 218px;
  }
`
