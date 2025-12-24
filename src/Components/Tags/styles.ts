import styled, { css } from 'styled-components'
import { cores } from '../../GlobalStyle'

interface statusTagProps {
  status?: 'pendente' | 'andamento' | 'concluido' | 'cancelado'
}

export const TagContainer = styled.div`
  background-color: transparent;
`

const background = {
  pendente: css`
    color: #edf3fa;
    background-color: #345b8cd9;
  `,
  andamento: css`
    color: #fff4d6;
    background-color: #8d6e00d9;
  `,
  concluido: css`
    color: #e6f4ea;
    background-color: #2e7d32d9;
  `,
  cancelado: css`
    color: #fceaea;
    background-color: #c62828d9;
  `
}

export const Tag = styled.span.withConfig({
  shouldForwardProp: (props) => props !== 'status'
})<statusTagProps>`
  color: ${cores.corFooter};
  font-size: 12px;
  padding: 6px 4px;
  margin-left: 8px;
  ${({ status }) =>
    !status
      ? css`
          background-color: ${cores.corTexto};
        `
      : background[status]}
`
