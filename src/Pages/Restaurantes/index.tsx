import { useParams } from 'react-router-dom'

import HeaderRestaurante from '../../Components/HeaderRestaurante'
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
  return (
    <div>
      <HeaderRestaurante
        restaurante={restaurante}
        tipo={restaurante.tipo}
        nome={restaurante.titulo}
      />
      <ListaRestaurante produtos={restaurante.cardapio} />
    </div>
  )
}
export default Restaurantes
