import styled from 'styled-components'
import { breakpoint, cores } from '../../GlobalStyle'

interface PedidosContainerSectionProps {
  variant: 'profile' | 'management'
}

export const PedidosContainerSection = styled.section.withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop)
})<PedidosContainerSectionProps>`
  background-color: ${({ variant }) =>
    variant == 'profile' ? cores.corDeFundo : cores.corFooter};
  padding: ${({ variant }) => (variant == 'profile' ? '24px' : '0')};
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${breakpoint.tablet}) {
    padding: ${({ variant }) => (variant == 'profile' ? '8px' : '0')};
  }
`
