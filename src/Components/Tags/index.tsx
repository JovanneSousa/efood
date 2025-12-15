import * as S from './styles'

type Props = {
  categoria: string[]
  destaque: boolean
}

const Tag = ({ categoria, destaque }: Props) => {
  const categoriasArray = Array.isArray(categoria)
    ? categoria
    : typeof categoria === 'string'
    ? [categoria]
    : []

  return (
    <S.CategoriaContainer>
      {destaque && (
        <S.Categoria key={'destaque'}>Destaque da semana</S.Categoria>
      )}
      {categoriasArray.map((cat) => (
        <S.Categoria key={cat}>{cat}</S.Categoria>
      ))}
    </S.CategoriaContainer>
  )
}

export default Tag
