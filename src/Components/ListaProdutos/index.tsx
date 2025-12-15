import CardProduto from '../CardProduto'
import { type Produto } from '../../Pages/Restaurantes'
import { ListaProdutos } from './styles'

export type Props = {
  produtos: Produto[]
}

const ListaRestaurante = ({ produtos }: Props) => {
  return (
    <ListaProdutos className="container">
      {produtos.map((produto) => (
        <CardProduto
          porcao={produto.porcao}
          preco={produto.preco}
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
