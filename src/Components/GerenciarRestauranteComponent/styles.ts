import styled from 'styled-components'
import { breakpoint, cores } from '../../GlobalStyle'

export const ContainerGerenciar = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  form {
    input {
      background-color: ${cores.corDeFundo} !important;
    }

    .flex {
      justify-content: flex-end;

      button {
        max-width: 150px;

        @media (max-width: ${breakpoint.tablet}) {
          max-width: none;
        }
      }
    }
  }

  .flex {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    .grid-item {
      cursor: pointer;
      transition: all ease 0.3s;
      padding: 24px;
      background-color: ${cores.corFooter};

      .title-card {
        font-size: 24px;
        font-weight: bold;

        @media (max-width: ${breakpoint.tablet}) {
          font-size: 16px;
        }
      }

      p {
        font-size: 14px;
        padding: 8px 0;
        @media (max-width: ${breakpoint.tablet}) {
          font-size: 12px;
          padding: 4px 0;
        }
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

      @media (max-width: ${breakpoint.tablet}) {
        display: flex;
        gap: 20px;
        align-items: center;
        padding: 8px;
      }
    }

    @media (max-width: ${breakpoint.tablet}) {
      grid-template-columns: 1fr;
    }
  }

  .content {
    background-color: ${cores.corFooter};
    padding: 24px;

    .grid {
      grid-template-columns: 1fr 1fr;

      @media (max-width: ${breakpoint.tablet}) {
        grid-template-columns: 1fr;
      }
    }

    .content-title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
      gap: 20px;
      align-items: center;

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

    @media (max-width: ${breakpoint.tablet}) {
      padding: 16px;
    }
  }
`
