import styled from 'styled-components'
import { breakpoint, cores } from '../../GlobalStyle'

export const FormContainer = styled.div`
  max-width: 460px;
  margin: 32px auto;
  background-color: ${cores.branco};
  padding: 24px;

  p {
    text-align: center;
    color: ${cores.corLeveTexto};
    font-weight: bold;

    &.title-login {
      font-size: 32px;
      margin-bottom: 16px;
      color: ${cores.corTexto};

      @media (max-width: ${breakpoint.tablet}) {
        font-size: 24px;
        margin-bottom: 8px;
      }
    }
  }
`
