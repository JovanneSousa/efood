import styled from 'styled-components'
import { cores } from '../../GlobalStyle'

export const ContainerGerenciar = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    .grid-item {
      cursor: pointer;
      transition: all ease 0.3s;
      padding: 24px;
      background-color: ${cores.corFooter};

      .flex {
        display: flex;
        gap: 8px;
        align-items: center;
      }

      .title-card {
        font-size: 24px;
        font-weight: bold;
      }

      p {
        font-size: 14px;
        padding: 8px 0;
      }

      .icon-container {
        width: 56px;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${cores.corDeFundoEscura};
        margin-bottom: 16px;
        transition: all ease 0.3s;
      }

      &.is-active {
        color: ${cores.branco};
        background-color: ${cores.corTexto};

        .icon-container {
          background-color: ${cores.corLeveTexto};
        }
      }

      &:hover {
        transform: scale(1.03);
      }
    }
  }

  .content {
    background-color: ${cores.corFooter};
    padding: 24px;

    .grid {
      grid-template-columns: 1fr 1fr;
    }

    .content-title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;

      p {
        font-weight: bold;
        padding: 4px;
      }

      .desc {
        font-weight: normal;
      }

      button {
        max-width: 150px;
      }
    }
  }
`
