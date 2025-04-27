import CardProduto from '../CardProduto'
import { ListaProdutos } from './styles'
import ProdutoItem from '../Models/Produtos'

export type Props = {
  Produto: ProdutoItem[]
}

const ListaRestaurante = ({ Produto }: Props) => {
  return (
    <ListaProdutos className="container">
      {Produto.map((Produto) => (
        <CardProduto
          key={Produto.id}
          descricao={Produto.descricao}
          image={Produto.image}
          nome={Produto.nome}
          id={Produto.id}
        />
      ))}
    </ListaProdutos>
  )
}

export default ListaRestaurante
