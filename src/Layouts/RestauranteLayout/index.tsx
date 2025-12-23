import Header from '../../Components/Header'
import { Outlet, useParams } from 'react-router-dom'
import Footer from '../../Components/Footer'
import SidebarModal from '../../Components/SidebarModal'
import { Loader } from 'lucide-react'
import items from '../../Data'

const RestauranteLayout = () => {
  const { id } = useParams()
  const restaurante = items?.find((r) => r.id === Number(id))

  if (!restaurante) return <Loader />
  return (
    <>
      <Header
        variant="restaurante"
        restaurante={restaurante}
        nome={restaurante.titulo}
        tipo={restaurante.tipo}
      />
      <div className="page-content">
        <Outlet />
      </div>
      <Footer />
      <SidebarModal />
    </>
  )
}

export default RestauranteLayout
