import RestauranteList from '../../Components/RestauranteList'
import type { Produto } from '../Restaurantes'

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string[]
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Produto[]
}

const Home = () => {
  return <RestauranteList />
}

export default Home
