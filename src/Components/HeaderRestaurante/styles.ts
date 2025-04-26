import styled from 'styled-components'
import fundo from '../../Assets/image/Vector.png'
import macarrao from '../../Assets/image/macarrao.png'
import { cores } from '../../GlobalStyle'

export const BackgroundHeader = styled.header`
    background-image: url(${fundo})} 
`

export const HeaderRestauranteTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  padding: 48px 0 64px;
  }
`

export const BannerSection = styled.div`
  background-image: url(${macarrao});
  color: ${cores.branco};
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
  background-size: cover;
  font-size: 32px;
  padding: 24px 0 32px 0;
`
export const TipoRestaurante = styled.h3`
  font-weight: lighter;
`

export const NomeRestaurante = styled.h4`
  font-weight: bold;
  margin-top: 152px;
`
