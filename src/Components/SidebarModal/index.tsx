import { Side, SidebarModalSection } from './styles'
import CartBar from '../CartBar'
import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import { clear } from '../../store/reducers/cart'
import { resetCheckout } from '../../store/reducers/checkout'
import { closeSidebar } from '../../store/reducers/sideModal'
import ProfileSide from '../ProfileSide'

const SidebarModal = () => {
  const dispatch = useDispatch()
  const { orderId } = useSelector((state: RootReducer) => state.checkout)
  const { sidebarOpen, sidebarType } = useSelector(
    (state: RootReducer) => state.sideModal
  )

  const closeCart = () => {
    dispatch(closeSidebar())
    dispatch(resetCheckout())

    if (orderId !== '') {
      dispatch(clear())
    }
  }

  return (
    <SidebarModalSection
      onClick={closeCart}
      className={sidebarOpen ? 'is-open' : ''}
    >
      <div className="overlay" />
      <Side onClick={(e) => e.stopPropagation()}>
        {sidebarType == 'cart' && <CartBar />}
        {sidebarType == 'profile' && <ProfileSide />}
      </Side>
    </SidebarModalSection>
  )
}

export default SidebarModal
