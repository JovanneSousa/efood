import styled from 'styled-components'

import hero from '../../Assets/image/Vector.png'
import { cores } from '../../GlobalStyle'

export const Cabecalho = styled.header`
padding: 40px;
    height: 384px;
  background-image: url(${hero})};
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
  margin-top: 136px;
  font-size: 36px;
`
