import Header from '../../Components/Header'
import RestauranteList from '../../Components/RestauranteList'
import { useEffect, useState } from 'react'

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
  const [restaurante, setRestaurante] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])

  return (
    <>
      <Header />
      <RestauranteList Restaurantes={restaurante} />
    </>
  )
}

export default Home
