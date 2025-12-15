import styled, { keyframes } from 'styled-components'
import { cores } from '../../GlobalStyle'

export const spin = keyframes`
    0% {transform: rotate(0deg)}
25% {transform: rotate(15deg)}
50% {transform: rotate(-15deg)}
75% {transform: rotate(10deg)}
100% {transform: rotate(0deg)}
`

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
`

export const IconWrapper = styled.div`
  display: flex;
  gap: 16px;
  animation: ${spin} 1.2s infinite;
  color: ${cores.corTexto};
`

export const Message = styled.p`
  margin-top: 16px;
  font-size: 18px;
  color: ${cores.corTexto};
  font-weight: 600;
`
