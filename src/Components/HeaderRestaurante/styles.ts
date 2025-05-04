import styled from 'styled-components'
import fundo from '../../Assets/image/Vector.png'
import { cores } from '../../GlobalStyle'
import { Link } from 'react-router-dom'

export const BackgroundHeader = styled.header`
  background-image: url(${fundo});
`
export const Nav = styled(Link)`
  color: ${cores.corTexto};
  &:visited {
    color: ${cores.corTexto};
  }

  &:hover {
    color: ${cores.corTexto};
  }
`
export const ContainersHeader = styled.div`
  width: 192px;

  span {
    font-size: 18px;
    cursor: pointer;
  }
`

export const HeaderRestauranteTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  padding: 48px 0 64px;
  position: relative;
`

export const BannerSection = styled.div`
  color: ${cores.branco};
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
  background-size: cover;
  font-size: 32px;
  padding: 24px 0 32px 0;
`
export const TipoRestaurante = styled.h3`
  font-weight: lighter;
  font-size: 32px;
`

export const NomeRestaurante = styled.h4`
  font-weight: bold;
  margin-top: 152px;
`
