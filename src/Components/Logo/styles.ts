import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { breakpoint } from '../../GlobalStyle'

export const ContainerImg = styled(Link)`
  display: block;
  margin: 0 auto;
  width: 126px;

  @media (max-width: ${breakpoint.tablet}) {
    width: 96px;
  }
`
export const ImgLogo = styled.img`
  width: 100%;
`
