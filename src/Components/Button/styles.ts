import styled from 'styled-components'
import { cores } from '../../GlobalStyle'

interface ButtonProps {
  padding?: string
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
  padding: ${({ padding }) =>
    padding == 'light' ? '8px' : padding == 'big' ? '8px 8px' : '4px'};
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

  &.comprar {
    width: 218px;
  }
`
