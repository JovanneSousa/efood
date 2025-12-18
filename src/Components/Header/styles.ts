import styled from 'styled-components'

import hero from '../../assets/image/Vector.png'
import { breakpoint, cores } from '../../GlobalStyle'

export const Cabecalho = styled.header`
  padding: 40px;
  background-image: url(${hero});

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: ${breakpoint.tablet}) {
    padding: 40px 0;
  }
`
export const ImageHeader = styled.img`
  width: 126px;
  height: 58px;
  display: block;
  margin: 0 auto;
`

export const TituloHeader = styled.h2`
  color: ${cores.corTexto};
  text-align: center;
  margin-top: 32px;
  font-size: 24px;

  @media (max-width: ${breakpoint.tablet}) {
  }
`
