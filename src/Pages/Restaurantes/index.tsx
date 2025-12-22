import { useParams } from 'react-router-dom'

import ListaRestaurante from '../../Components/ListaProdutos'
import Loader from '../../Components/Loader'
import items from '../../Data'

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

  const restaurante = items.find((r) => r.id === Number(id))

  if (!restaurante) {
    return <Loader />
  }
  return <ListaRestaurante produtos={restaurante.cardapio} />
}
export default Restaurantes
