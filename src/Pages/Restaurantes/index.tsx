import HeaderRestaurante from '../../Components/HeaderRestaurante'
import ListaProdutos from '../../Components/ListaProdutos'
import pizza from '../../Assets/image/pizza.png'
import ProdutoItem from '../../Components/Models/Produtos'

const produtos: ProdutoItem[] = [
  {
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 1
  },
  {
    nome: 'Pizza Quatro queijos',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 2
  },
  {
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 3
  },
  {
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 4
  },
  {
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 5
  },
  {
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 6
  }
]

const Restaurante = () => {
  return (
    <>
      <HeaderRestaurante />
      <ListaProdutos Produto={produtos} />
    </>
  )
}
export default Restaurante
