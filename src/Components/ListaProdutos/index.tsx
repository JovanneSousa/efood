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
        <CardProduto variant="default" produto={produto} key={produto.id} />
      ))}
    </ListaProdutos>
  )
}

export default ListaRestaurante
