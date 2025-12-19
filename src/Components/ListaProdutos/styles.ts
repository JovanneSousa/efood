import styled from 'styled-components'
import { breakpoint } from '../../GlobalStyle'

export const ListaProdutos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
  }
`
