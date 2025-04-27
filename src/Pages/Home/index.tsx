import Header from '../../Components/Header'
import Restaurante from '../../Components/Models/Restaurante'
import RestauranteList from '../../Components/RestauranteList'
import italian from '../../Assets/image/italian.png'
import japan from '../../Assets/image/sushi.png'

const Restaurantess: Restaurante[] = [
  {
    categoria: ['Japonesa', 'Destaque do dia'],
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1,
    nome: 'Hioki Sushi',
    nota: 4.9,
    image: japan
  },
  {
    categoria: ['Italiano'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 2,
    nome: 'La Dolce Vitta Trattoria',
    nota: 4.6,
    image: italian
  },
  {
    categoria: ['Italiano'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 3,
    nome: 'La Dolce Vitta Trattoria',
    nota: 4.6,
    image: italian
  },
  {
    categoria: ['Italiano'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 4,
    nome: 'La Dolce Vitta Trattoria',
    nota: 4.6,
    image: italian
  },
  {
    categoria: ['Italiano'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 5,
    nome: 'La Dolce Vitta Trattoria',
    nota: 4.6,
    image: italian
  },
  {
    categoria: ['Italiano'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 6,
    nome: 'La Dolce Vitta Trattoria',
    nota: 4.6,
    image: italian
  }
]

const Home = () => {
  return (
    <>
      <Header />
      <RestauranteList Restaurantess={Restaurantess} />
    </>
  )
}

export default Home
