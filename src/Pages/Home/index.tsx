import Header from '../../Components/Header'
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
  return (
    <>
      <Header />
      <RestauranteList />
    </>
  )
}

export default Home
