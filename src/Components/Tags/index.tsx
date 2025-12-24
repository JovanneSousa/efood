import * as S from './styles'

type Props = {
  value?: string[]
  destaque?: boolean
  status?: 'pendente' | 'andamento' | 'concluido' | 'cancelado'
}

const Tag = ({ value, destaque = false, status }: Props) => {
  const valueAsArray = Array.isArray(value)
    ? value
    : typeof value === 'string'
    ? [value]
    : []

  return (
    <S.TagContainer>
      {destaque && <S.Tag key={'destaque'}>Destaque da semana</S.Tag>}
      {valueAsArray.map((cat) => (
        <S.Tag status={status} key={cat}>
          {cat}
        </S.Tag>
      ))}
      {status && <S.Tag status={status}>{status}</S.Tag>}
    </S.TagContainer>
  )
}

export default Tag
