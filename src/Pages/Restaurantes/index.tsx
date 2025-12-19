import { useParams } from 'react-router-dom'

import ListaRestaurante from '../../Components/ListaProdutos'
import { useGetRestaurantesQuery } from '../../services/api'
import Loader from '../../Components/Loader'

export type Produto = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Restaurantes = () => {
  const { id } = useParams()
  const { data: restaurantes } = useGetRestaurantesQuery()

  const restaurante = restaurantes?.find((r) => r.id === Number(id))

  if (!restaurante) {
    return <Loader />
  }
  return <ListaRestaurante produtos={restaurante.cardapio} />
}
export default Restaurantes
