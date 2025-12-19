import styled from 'styled-components'
import { cores } from '../../GlobalStyle'

export const ProfileSideContainer = styled.div`
  color: ${cores.branco};
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 20px;

  ul {
    li {
      padding: 8px 4px;
      cursor: pointer;
      transition: all ease 0.3s;

      &:hover {
        background-color: ${cores.corLeveTexto};
      }
    }
  }

  .user {
    display: flex;
    align-items: center;
    gap: 20px;

    .img {
      overflow: hidden;

      img {
        border-radius: 50%;
      }
    }
  }
`
