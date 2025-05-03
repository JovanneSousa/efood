import { useEffect, useState } from 'react'
import HeaderRestaurante from '../../Components/HeaderRestaurante'
import { Restaurante } from '../Home'
import ListaRestaurante from '../../Components/ListaProdutos'
import { useParams } from 'react-router-dom'
import { useGetRestaurantesQuery } from '../../services/api'

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
    return (
      <div className="container">
        <h3>Carregando...</h3>
      </div>
    )
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
