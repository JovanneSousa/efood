import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import SidebarModal from '../../Components/SidebarModal'

const DefaultLayout = () => {
  return (
    <>
      <Header variant="default" />
      <div className="page-content">
        <Outlet />
      </div>
      <Footer />
      <SidebarModal />
    </>
  )
}
export default DefaultLayout
