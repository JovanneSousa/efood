import { useDispatch, useSelector } from 'react-redux'

import { clear, close } from '../../store/reducers/cart'
import { resetCheckout } from '../../store/reducers/checkout'
import { RootReducer } from '../../store'

import Button from '../Button'

const EndMessage = () => {
  const { orderId } = useSelector((state: RootReducer) => state.checkout)

  const dispatch = useDispatch()
  const clearCart = () => {
    dispatch(clear())
    dispatch(close())
    dispatch(resetCheckout())
  }

  const resetAll = () => {
    clearCart()
    resetCheckout()
  }

  return (
    <>
      <h4>Pedido realizado - {orderId}</h4>
      <div className="text-container">
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
      </div>
      <Button onClick={resetAll}>Concluir</Button>
    </>
  )
}

export default EndMessage
