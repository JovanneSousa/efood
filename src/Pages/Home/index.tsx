import RestauranteList from '../../Components/RestauranteList'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string[]
  avaliacao: number
  descricao: string
  capa: string
  cardapio: []
}

const Home = () => {
  return <RestauranteList />
}

export default Home
