import styled from 'styled-components'
import { breakpoint, cores } from '../../GlobalStyle'

export const Side = styled.aside`
  background-color: ${cores.corTexto};
  max-width: 360px;
  width: 100%;
  padding: 8px;
  z-index: 1;

  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${breakpoint.tablet}) {
    max-width: 80vw;
  }
`

export const SidebarModalSection = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: flex-end;

  /* estado fechado */
  visibility: hidden;
  pointer-events: none;

  &.is-open {
    visibility: visible;
    pointer-events: all;
  }

  &:not(.is-open) {
    transition: visibility 0s linear 0.3s;
  }

  &.is-open ${Side} {
    transform: translateX(0);
  }

  &.is-open .overlay {
    opacity: 0.8;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background-color: #000;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .cart-message {
    color: ${cores.branco};
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    padding: 8px;
  }
`
