import styled from 'styled-components'

import hero from '../../assets/image/Vector.png'
import { breakpoint, cores } from '../../GlobalStyle'
import { Link } from 'react-router-dom'
import fundo from '../../assets/image/Vector.png'

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
  width: 200px;

  span {
    font-size: 18px;
  }

  @media (max-width: ${breakpoint.tablet}) {
    font-size: 14px;
    span {
      font-size: 12px;
    }

    img {
      max-width: 100%;
    }
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
