import styled from 'styled-components'
import { cores } from '../../GlobalStyle'

export const CheckoutContainer = styled.div`
  color: ${cores.branco};

  h4 {
    padding-top: 16px;
  }

  form {
    margin-top: 16px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    column-gap: 32px;
  }

  .flex70 {
    width: 80%;
  }

  .text-container {
    margin-top: 16px;
    font-size: 14px;
    line-height: 22px;

    p {
      margin-bottom: 24px;
    }
  }
`

export const InputGroup = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;

  input {
    width: 100%;
    display: block;
    background-color: ${cores.corFooter};
    border: 1px solid ${cores.corFooter};
    height: 32px;
    margin-top: 8px;
    padding: 8px;
    font-size: 14px;
    font-weight: bold;
  }
`
