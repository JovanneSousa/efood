import styled from "styled-components";
import { cores } from "../../GlobalStyle";

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;

  .pointer {
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .cart-wrapper {
    position: relative;
    display: inline-block;
  }

  .cart-badge {
    position: absolute;
    top: -6px;
    right: -10px;
    background-color: ${cores.branco};
    color: ${cores.corTexto};
    border: 1px solid ${cores.corTexto};
    font-size: 0.7rem;
    font-weight: bold;
    padding: 2px 6px;
    border-radius: 999px;
    min-width: 18px;
    text-align: center;
  }

  button,
  a {
    background-color: ${cores.corDeFundo};
    font-size: 16px;
    text-align: center;
    min-width: 150px;
    align-items: center;
    margin: 0;
  }
`