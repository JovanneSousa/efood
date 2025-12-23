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

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 24px;

    .grid-item {
      display: flex;
      flex-direction: column;
      gap: 20px;
      background-color: ${cores.corDeFundo};
      padding: 16px;

      @media (max-width: ${breakpoint.tablet}) {
        padding: 16px;
      }
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

  @media (max-width: ${breakpoint.tablet}) {
    padding: 16px 0;
  }

  .title-form {
    font-weight: bold;
    font-size: 22px;
    padding: 16px 0 8px;
    text-align: center;

    @media (max-width: ${breakpoint.tablet}) {
      font-size: 18px;
    }
  }
`

export const ImageContainerFit = styled.div`
  width: 80px;
  height: 80px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const ContentContainer = styled.div`
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

  @media (max-width: ${breakpoint.tablet}) {
    max-height: 650px;
  }
`

export const CardAddress = styled.div`
  padding: 16px;
  background-color: ${cores.corFooter};

  .header-address-card {
    display: flex;
    justify-content: space-between;
    align-items: center;

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

  .icons {
    display: flex;
    gap: 8px;
    align-items: center;

    svg {
      cursor: pointer;
      padding: 8px;
    }
  }
`
