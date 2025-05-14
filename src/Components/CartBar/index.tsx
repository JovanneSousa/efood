import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'
import { getTotalPrice, formataPreco } from '../../utils'
import Checkout from '../Checkout'
import { resetCheckout, setIspaying } from '../../store/reducers/checkout'

import Button from '../Button'
import lixeira from '../../Assets/image/lixeira.png'
import * as S from './styles'

const CartBar = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const { isFinished, isPaying, orderId } = useSelector(
    (state: RootReducer) => state.checkout
  )

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
    dispatch(resetCheckout())

    if (orderId !== '') {
      dispatch(clear())
    }
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const completePurchase = () => {
    dispatch(setIspaying(true))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <div className="overlay" onClick={closeCart}></div>
      <S.SideBar>
        {items.length > 0 && !isPaying ? (
          <>
            <S.ProductContainer>
              {items.map((item) => (
                <S.Produto key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h4>{item.nome}</h4>
                    <p>{formataPreco(item.preco)}</p>
                    <S.Trash
                      src={lixeira}
                      onClick={() => removeItem(item.id)}
                    />
                  </div>
                </S.Produto>
              ))}
            </S.ProductContainer>
            <S.Price>
              <p>Valor total</p>
              <p>{formataPreco(getTotalPrice(items))}</p>
            </S.Price>
            <Button onClick={completePurchase}>Continuar com a entrega</Button>
          </>
        ) : !isPaying ? (
          <p className="cart-message">
            Adicione itens no carrinho para prosseguir com a compra
          </p>
        ) : (
          <Checkout finished={isFinished} />
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default CartBar
