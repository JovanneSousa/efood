import styled from 'styled-components'

import hero from '../../assets/image/Vector.png'
import { breakpoint, cores } from '../../GlobalStyle'

export const Cabecalho = styled.header`
  padding: 40px;
  background-image: url(${hero});

  .nav-header {
    display: flex;
    justify-content: space-between;
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

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  button, a {
    background-color: ${cores.corDeFundo};
    font-size: 16px;
    text-align: center;
    min-width: 150px;
    align-items: center;
    margin: 0;
  }
`
