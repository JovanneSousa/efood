import styled from 'styled-components'
import { cores } from '../../GlobalStyle'

export const CategoriaContainer = styled.div`
  background-color: transparent;
  position: absolute;
  top: 8px;
  right: 8px;
`

export const Categoria = styled.span`
  background-color: ${cores.corTexto};
  color: ${cores.corFooter};
  font-size: 12px;
  padding: 6px 4px;
  display: inline-block;
  margin: 8px 8px 0 0;
`
