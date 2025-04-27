import CardProduto from '../CardProduto'
import { ListaProdutos } from './styles'
import pizza from '../../Assets/image/pizza.png'

const ListaRestaurante = () => {
  return (
    <ListaProdutos className="container">
      <CardProduto
        item="Pizza Marguerita"
        descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        image={pizza}
      />
    </ListaProdutos>
  )
}

export default ListaRestaurante
