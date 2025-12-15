import styled from 'styled-components'
import { breakpoint, cores } from '../../GlobalStyle'
import Button from '../Button'

export const ModalSection = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: none;
  justify-content: center;
  align-items: center;
  color: #fff;
  z-index: 1;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }

  &.visible {
    display: flex;
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.corTexto};
  z-index: 1;
  padding: 8px;

  header {
    display: flex;
    flex-direction: row-reverse;
  }

  header > img {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`

export const ModalDescription = styled.div`
  display: flex;
  margin: 24px;

  img {
    object-fit: cover;
    width: 280px;
    height: 280px;
  }

  div {
    margin-left: 24px;

    h3,
    p {
      margin-bottom: 16px;
    }

    h3 {
      font-size: 18px;
      font-weight: bold;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }
  }

  @media (max-width: ${breakpoint.tablet}) {
    display: block;
    max-width: 100%;
    margin: 16px;
    text-align: center;

    div {
      margin: 0;
    }

    h3 {
      margin-top: 16px;
    }
  }
`