import styled, { css } from 'styled-components'
import { cores } from '../../GlobalStyle'

interface statusTagProps {
  status?: 'pendente' | 'andamento' | 'concluido' | 'cancelado'
}

export const TagContainer = styled.div`
  background-color: transparent;
  position: absolute;
  top: 8px;
  right: 8px;
`

const background = {
  pendente: css`
    background-color: #edf3fa;
    color: #345b8c;
  `,
  andamento: css`
    background-color: #fff4d6;
    color: #8d6e00;
  `,
  concluido: css`
    background-color: #e6f4ea;
    color: #2e7d32;
  `,
  cancelado: css`
    background-color: #fceaea;
    color: #c62828;
  `
}

export const Tag = styled.span.withConfig({
  shouldForwardProp: (props) => props !== 'status'
})<statusTagProps>`
  color: ${cores.corFooter};
  font-size: 12px;
  padding: 6px 4px;
  display: inline-block;
  margin: 8px 8px 0 0;
  ${({ status }) =>
    !status
      ? css`
          background-color: ${cores.corTexto};
        `
      : background[status]}
`
