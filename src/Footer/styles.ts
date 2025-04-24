import styled from 'styled-components'
import { cores } from '../GlobalStyle'

export const FooterSection = styled.footer`
  background-color: ${cores.corFooter};
  height: 296px;
  padding: 40px;

  img {
    margin: 0 auto;
    display: block;
  }
`
export const TextoFooter = styled.p`
  color: ${cores.corTexto};
  text-align: center;
`
