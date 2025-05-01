import { useEffect, useState } from 'react'
import HeaderRestaurante from '../../Components/HeaderRestaurante'
import { Restaurante } from '../Home'
import ListaRestaurante from '../../Components/ListaProdutos'
import { useParams } from 'react-router-dom'

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
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res: Restaurante[]) => {
        const encontrado = res.find((r) => r.id === Number(id))
        setRestaurante(encontrado || null)
      })
  }, [id])

  if (!restaurante) {
    return (
      <div className="container">
        <h3>Carregando...</h3>
      </div>
    )
  }
  return (
    <div>
      <HeaderRestaurante tipo={restaurante.tipo} nome={restaurante.titulo} />
      <ListaRestaurante produtos={restaurante.cardapio} />
    </div>
  )
}
export default Restaurantes
