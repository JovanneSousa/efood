import styled, { css } from 'styled-components'
import { cores } from '../../GlobalStyle'

type Variant = 'profile' | 'default'

interface VariantProps {
  variant: Variant
}

const cardVariants = {
  default: css`
    background-color: ${cores.branco};
    border: 1px solid ${cores.corTexto};
    max-height: 398px;

    > img {
      max-height: 215px;
    }
  `,
  profile: css`
    background-color: ${cores.corDeFundoEscura};
    > img {
      max-height: 128px;
    }
  `
}

const titleVariants = {
  default: css`
    padding-bottom: 16px;
    font-weight: bold;
  `,
  profile: css`
    flex-direction: column;
  `
}

export const CardRestauranteItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant'
})<VariantProps>`
  height: 100%;
  position: relative;

  > img {
    max-width: 472px;
    width: 100%;
    object-fit: cover;
  }

  ${({ variant }) => cardVariants[variant]}
`

export const DescRestaurante = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant'
})<VariantProps>`
  padding: 8px;
  background-color: ${({ variant }) =>
    variant == 'profile' ? `${cores.corDeFundoEscura}` : `${cores.branco}`};
`

export const TextDescRestaurante = styled.p`
  font-size: 14px;
  line-height: 22px;
  max-height: 88px;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const TituloRestaurante = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant'
})<VariantProps>`
  display: flex;

  justify-content: space-between;
  font-size: 18px;

  p {
    font-size: 16px;
    font-weight: normal;
  }

  ${({ variant }) => titleVariants[variant]}
`

export const Nota = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant'
})<VariantProps>`
  display: flex;
  align-items: center;
  ${({ variant }) =>
    variant === 'profile' &&
    css`
      font-weight: normal;
    `}

  span {
    margin-right: 8px;
  }
  img {
    width: 21px;
  }
`
export const ContainerLink = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant'
})<VariantProps>`
  margin-top: 16px;

  a {
    display: ${({ variant }) =>
      variant == 'profile' ? 'block' : 'inline'};
  }
`
