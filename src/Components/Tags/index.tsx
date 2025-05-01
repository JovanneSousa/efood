import { CategoriaContainer, Categoria } from './styles'

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
    <CategoriaContainer>
      {destaque && <Categoria key={'destaque'}>Destaque da semana</Categoria>}
      {categoriasArray.map((cat) => (
        <Categoria key={cat}>{cat}</Categoria>
      ))}
    </CategoriaContainer>
  )
}

export default Tag
