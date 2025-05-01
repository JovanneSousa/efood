import CardProduto from '../CardProduto'
import { ListaProdutos } from './styles'
import { Produto } from '../../Pages/Restaurantes'

export type Props = {
  produtos: Produto[]
}

const ListaRestaurante = ({ produtos }: Props) => {
  return (
    <ListaProdutos className="container">
      {produtos.map((produto) => (
        <CardProduto
          key={produto.id}
          descricao={produto.descricao}
          image={produto.foto}
          nome={produto.nome}
          id={produto.id}
        />
      ))}
    </ListaProdutos>
  )
}

export default ListaRestaurante
