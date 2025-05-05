import styled from 'styled-components'
import { breakpoint, cores } from '../../GlobalStyle'

export const RestauranteSection = styled.div`
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  color: ${cores.corTexto};

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
  }
`
