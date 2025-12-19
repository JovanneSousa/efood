import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import SidebarModal from '../../Components/SidebarModal'

export const DefaultLayout = () => {
  return (
    <>
      <Header variant="default" />
      <Outlet />
      <Footer />
      <SidebarModal />
    </>
  )
}
