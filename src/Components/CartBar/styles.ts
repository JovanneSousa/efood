import styled from 'styled-components'
import { cores } from '../../GlobalStyle'

export const CartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;

  .overlay {
    background-color: #000;
    opacity: 0.8;
    width: 100%;
    height: 100%;
  }
`

export const SideBar = styled.aside`
  background-color: ${cores.corTexto};
  max-width: 360px;
  width: 100%;
  padding: 8px;
`

export const ProductContainer = styled.div`
  max-height: 80vh;
  overflow-y: scroll;
  scrollbar-width: none;
`

export const Produto = styled.div`
  background-color: ${cores.corFooter};
  display: flex;
  padding: 8px;
  position: relative;
  margin: 8px 0;

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  img:first-child {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`

export const Trash = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  right: 8px;
  bottom: 8px;
`

export const Price = styled.div`
  margin-top: 40px;
  margin-top: 24px 0 8px;
  color: ${cores.corFooter};
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`
