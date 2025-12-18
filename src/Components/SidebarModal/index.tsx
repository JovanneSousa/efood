import { Side, SidebarModalSection } from './styles'
import CartBar from '../CartBar'
import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import { clear, close } from '../../store/reducers/cart'
import { resetCheckout } from '../../store/reducers/checkout'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

interface SidebarModalProps {
  isSidebarOpen: bool
}

const SidebarModal: React.FC<SidebarModalProps> = ({ isSidebarOpen }) => {
  const page = useParams()
  const dispatch = useDispatch()
  const { isOpen: cartOpen } = useSelector((state: RootReducer) => state.cart)
  const { orderId } = useSelector((state: RootReducer) => state.checkout)

  const closeCart = () => {
    dispatch(close())
    dispatch(resetCheckout())

    if (orderId !== '') {
      dispatch(clear())
    }
  }

  return (
    <SidebarModalSection
      onClick={closeCart}
      className={isSidebarOpen ? 'is-open' : ''}
    >
      <div className="overlay" />
      <Side>{cartOpen ? <CartBar /> : null}</Side>
    </SidebarModalSection>
  )
}

export default SidebarModal
