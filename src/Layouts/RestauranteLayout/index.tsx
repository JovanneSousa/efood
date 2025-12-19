import { useGetRestaurantesQuery } from '../../services/api'
import Header from '../../Components/Header'
import { Outlet, useParams } from 'react-router-dom'
import Footer from '../../Components/Footer'
import SidebarModal from '../../Components/SidebarModal'
import { Loader } from 'lucide-react'

const RestauranteLayout = () => {
  const { id } = useParams()
  const { data: restaurantes } = useGetRestaurantesQuery()
  const restaurante = restaurantes?.find((r) => r.id === Number(id))

  if (!restaurante) return <Loader />
  return (
    <>
      <Header
        variant="restaurante"
        restaurante={restaurante}
        nome={restaurante.titulo}
        tipo={restaurante.tipo}
      />
      <Outlet />
      <Footer />
      <SidebarModal />
    </>
  )
}

export default RestauranteLayout
