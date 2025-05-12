import Button from '../Button'
import * as S from './styles'
import lixeira from '../../Assets/image/lixeira.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ListaProdutos'
import Checkout from '../Checkout'
import { getTotalPrice } from '../../utils'

const CartBar = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <div className="overlay" onClick={closeCart}></div>
      <S.SideBar>
        {/* {items.length > 0 ? (
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
            <Button>Continuar com a entrega</Button>
          </>
        ) : (
          <p className="cart-message">
            Adicione itens no carrinho para prosseguir com a compra
          </p>
        )} */}
        <Checkout finished={true} checkoutType="delivery" />
      </S.SideBar>
    </S.CartContainer>
  )
}

export default CartBar
