import styled from 'styled-components'
import { breakpoint, cores } from '../../GlobalStyle'

export const ProfileContainer = styled.section`
  background-color: ${cores.corDeFundoEscura};

  .profile-data {
    display: flex;
    gap: 20px;
    align-items: center;
    background-color: ${cores.corDeFundo};
    padding: 24px;
    margin-bottom: 24px;
  }

  .profile-info {
    display: flex;
    flex-direction: column;

    p {
      line-height: 24px;
    }

    p.name-profile {
      font-size: 24px;
      font-weight: bold;
      line-height: 32px;
    }
  }

  .img {
    width: 80px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 24px;

    .grid-item {
      display: flex;
      flex-direction: column;
      gap: 20px;

      @media (max-width: ${breakpoint.tablet}) {
        padding: 8px 16px;
      }
    }

    > div {
      background-color: ${cores.corDeFundo};
      padding: 24px;
    }

    @media (max-width: ${breakpoint.tablet}) {
      grid-template-columns: 1fr;
    }
  }

  .title {
    display: flex;
    font-weight: bold;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      gap: 20px;
    }

    button {
      max-width: 72px;
      margin: 0px;
    }
  }

  .pedido-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    justify-content: center;

    .nome-restaurante {
      font-size: 16px;
      font-weight: bold;
    }
    .preco {
      font-size: 20px;
      font-weight: bold;
    }
    .pedido-item-group {
      display: flex;
      justify-content: space-between;
      gap: 16px;

      .details {
        cursor: pointer;
        transition: all ease 0.3s;
        &:hover {
          font-weight: bold;
          transform: scale(1.02);
        }
      }
    }
  }

  .pedidos {
    background-color: ${cores.corDeFundo};
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .img {
      height: 60px;
      width: 60px;
      img {
        border-radius: 0%;
      }
    }

    .pedido-item {
      background-color: ${cores.corDeFundoEscura};
      padding: 16px;

      .pedido-item-container {
        display: flex;
        gap: 16px;
      }

      @media (max-width: ${breakpoint.tablet}) {
        padding: 8px;
      }
    }

    .items {
      background-color: ${cores.corFooter};

      max-height: 0px;
      overflow: hidden;
      opacity: 0;

      transform: translateY(-8px);
      transition: max-height 0.35s ease, opacity 0.25s ease,
        transform 0.25s ease;

      > p {
        padding: 8px 0;
      }
      .item {
        padding: 12px;
        background-color: ${cores.corDeFundoEscura};
        margin-bottom: 8px;

        @media (max-width: ${breakpoint.tablet}) {
          padding: 8px;
        }
      }

      &.is-open {
        margin-top: 8px;
        max-height: 800px;
        opacity: 1;
        transform: translateY(0);
        padding: 8px;
      }

      .nome-restaurante,
      .preco {
        @media (max-width: ${breakpoint.tablet}) {
          font-size: 14px;
        }
      }
    }

    @media (max-width: ${breakpoint.tablet}) {
      padding: 8px;
    }
  }
`

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 530px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: thin;
  border-top: 1px solid ${cores.corTexto};
  border-bottom: 1px solid ${cores.corTexto};
  scrollbar-color: ${cores.corTexto} ${cores.corDeFundo};

  .card-address {
    padding: 16px;
    background-color: ${cores.corFooter};

    .header-address-card {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;

      .title-address {
        font-weight: bold;
      }

      span {
        background-color: ${cores.corTexto};
        color: ${cores.corDeFundo};
        padding: 4px 8px;
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
`
