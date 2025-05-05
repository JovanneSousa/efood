import styled from 'styled-components'
import { breakpoint, cores } from '../../GlobalStyle'

export const FooterSection = styled.footer`
  background-color: ${cores.corFooter};
  height: 100%;
  max-height: 298px;
  padding: 40px;
`
export const ContainerImage = styled.div`
  margin: 0 auto;
  width: 96px;
`

export const ImageFooter = styled.img`
  display: inline-block;
  margin: 32px 4px 0 4px;
`

export const TextoFooter = styled.p`
  color: ${cores.corTexto};
  text-align: center;
  margin-top: 80px;
  font-size: 12px;

  @media (max-width: ${breakpoint.tablet}) {
    margin-top: 64px;
  }
`
