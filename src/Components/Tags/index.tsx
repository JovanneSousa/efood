import { CategoriaContainer, Categoria } from './styles'

type Props = {
  categoria: string[]
}

const Tag = ({ categoria }: Props) => {
  return (
    <>
      <CategoriaContainer>
        {categoria.map((cat) => (
          <Categoria key={cat}>{cat}</Categoria>
        ))}
      </CategoriaContainer>
    </>
  )
}

export default Tag
