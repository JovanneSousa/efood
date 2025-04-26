import styled from 'styled-components'
import { cores } from '../../GlobalStyle'
import { Link } from 'react-router-dom'
import sushi from '../../Assets/image/sushi.png'

export const CardRestauranteItem = styled.div`
  border: 1px solid ${cores.corTexto};
  heigh: 398px;
  position: relative;
`

export const DescRestaurante = styled.div`
  padding: 8px;
`

export const TextDescRestaurante = styled.p`
  font-size: 14px;
  line-height: 22px;
`
export const TituloRestaurante = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  font-weight: bold;
  font-size: 18px;
`

export const Nota = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 8px;
  }
  img {
    width: 21px;
  }
`
export const ContainerLink = styled.div`
  margin-top: 16px;
`

export const SaibaMais = styled(Link)`
  padding: 4px 6px;
  background-color: ${cores.corTexto};
  color: ${cores.corFooter};
  font-size: 14px;
  cursor: pointer;
`
