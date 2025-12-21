import styled from 'styled-components'
import { cores } from '../../GlobalStyle'

interface CardRestauranteItemProps {
  variant: 'profile' | 'default'
}

export const CardRestauranteItem = styled.div.withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop)
})<CardRestauranteItemProps>`
  border: ${({ variant }) =>
    variant == 'default' ? `1px solid ${cores.corTexto}` : 'none'};
  height: 100%;
  max-height: ${({ variant }) => (variant == 'default' ? '398px' : '')};
  position: relative;

  > img {
    max-width: 472px;
    width: 100%;
    max-height: ${({ variant }) => (variant == 'default' ? '215px' : '128px')};
    object-fit: cover;
  }
`

export const DescRestaurante = styled.div`
  padding: 8px;
  background-color: ${cores.branco};
`

export const TextDescRestaurante = styled.p`
  font-size: 14px;
  line-height: 22px;
  max-height: 88px;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const TituloRestaurante = styled.div.withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop)
})<CardRestauranteItemProps>`
  display: flex;
  flex-direction: ${({ variant }) => (variant == 'profile' ? 'column' : '')};

  justify-content: space-between;
  padding-bottom: ${({ variant }) => (variant == 'profile' ? '' : '16px')};
  font-weight: ${({ variant }) => (variant == 'profile' ? 'normal' : 'bold')};
  font-size: 18px;

  p {
    font-size: 16px;
    font-weight: normal;
  }
`

export const Nota = styled.div.withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop)
})<CardRestauranteItemProps>`
  display: flex;
  align-items: center;
  font-weight: ${({ variant }) => (variant == 'profile' ? 'normal' : '')};

  span {
    margin-right: 8px;
  }
  img {
    width: 21px;
  }
`
export const ContainerLink = styled.div.withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop)
})<CardRestauranteItemProps>`
  margin-top: 16px;

  a {
    display: ${({ variant }) => (variant == 'profile' ? 'block' : '')};
  }
`
