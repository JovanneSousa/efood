import CardProduto from '../CardProduto'
import { ListaProdutos } from './styles'
import { Produto } from '../../Pages/Restaurantes'

export type Props = {
  produtos: Produto[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
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
