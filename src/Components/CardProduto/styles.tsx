import styled from 'styled-components'
import { cores } from '../../GlobalStyle'

export const CardContainer = styled.div`
  padding: 8px;
  background-color: ${cores.corTexto};
  color: ${cores.corFooter};

  img {
    width: 304px;
    height: 167px;
  }
`
export const NomeProduto = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
`

export const DescProduto = styled.p`
  font-size: 14px;
  line-height: 22px;
`
