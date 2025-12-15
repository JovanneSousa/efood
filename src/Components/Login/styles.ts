import styled from 'styled-components'
import { cores } from '../../GlobalStyle'

export const LoginContainer = styled.div`
  max-width: 460px;
  margin: 32px auto;
  background-color: ${cores.branco};
  padding: 24px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);

  p {
    text-align: center;
    color: ${cores.corLeveTexto};
    font-weight: bold;

    &.title-login {
      font-size: 32px;
      margin-bottom: 16px;
      color: ${cores.corTexto};
    }
  }

  form {
    .input-wrapper {
      display: flex;
      flex-direction: column;
      padding: 8px 0;
      margin-bottom: 16px;

      label {
        font-weight: bold;
        padding-bottom: 8px;
      }

      input {
        background-color: ${cores.corFooter};
        outline: none;
        border: none;
        padding: 8px;
        border: 1px solid ${cores.corFooter};
        color: ${cores.corTexto};
        font-size: 16px;
        font-weight: bold;

        &:focus {
          border: 1px solid ${cores.corLeveTexto};
        }
      }
    }
  }
`
